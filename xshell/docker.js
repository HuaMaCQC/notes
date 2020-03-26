
var serverName = [
  "db"
];

function Main() {
  xsh.Screen.Send("sudo systemctl start docker") // 開啟docker
  xsh.Screen.Send(String.fromCharCode(13));

  // 執行所需的服務
  for (var i = 0; i < serverName.length; i++) {
    xsh.Screen.Send("docker start " + serverName[i]);
    xsh.Screen.Send(String.fromCharCode(13));
  }

  xsh.Screen.Clear();

  xsh.Screen.Send("docker ps") // 執行
  xsh.Screen.Send(String.fromCharCode(13));
}