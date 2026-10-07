$ErrorActionPreference = 'Stop'
$projectRoot = $PSScriptRoot
$jdk = Get-ChildItem -LiteralPath "$projectRoot/.local-runtime" -Directory -Filter 'jdk-*' | Select-Object -First 1
if (!$jdk) { throw 'Java local não encontrado em .local-runtime.' }
$env:JAVA_HOME = $jdk.FullName
$env:PATH = "$env:JAVA_HOME/bin;$env:PATH"
$maven = "$projectRoot/.local-runtime/apache-maven-3.9.9/bin/mvn.cmd"
$backendProcess = $null
$listener = Get-NetTCPConnection -LocalPort 8080 -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1
if ($listener) {
  $existing = Get-CimInstance Win32_Process -Filter "ProcessId=$($listener.OwningProcess)"
  if (!$existing.CommandLine.Contains($projectRoot)) { throw 'A porta 8080 está ocupada por outro projeto.' }
} else {
  $backendProcess = Start-Process -FilePath $maven -ArgumentList 'spring-boot:run' -WorkingDirectory "$projectRoot/backend" -WindowStyle Hidden -PassThru -RedirectStandardOutput "$projectRoot/backend-local.log" -RedirectStandardError "$projectRoot/backend-local-error.log"
}
try {
  Set-Location "$projectRoot/frontend"
  npm run dev -- --host 127.0.0.1
} finally {
  if ($backendProcess -and !$backendProcess.HasExited) { & taskkill.exe /PID $backendProcess.Id /T /F | Out-Null }
}
