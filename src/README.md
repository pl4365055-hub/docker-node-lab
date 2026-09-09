# Docker Node Lab

以 Windows 與 Docker Desktop 建立 Node.js 開發環境。

## 功能

- 使用 Docker Desktop 執行 Node.js 應用程式
- 將 `node_modules` 放在 Docker volume 中，避免 Windows 本機套件衝突
- 使用 Nodemon 支援 hot reload
- 使用 MySQL 8，並以 Docker volume 保存資料

## 快速開始

```powershell
git clone https://github.com/pl4365055-hub/docker-node-lab.git
cd docker-node-lab
docker compose up --build
```

啟動後，Node.js 應用程式可透過以下網址存取：

<http://localhost:3000>

MySQL 預設連線資訊：

| 項目 | 值 |
| --- | --- |
| Host | `localhost`（從主機連線）或 `db`（從 app 容器連線） |
| Port | `3306` |
| Database | `lab` |
| User | `lab` |
| Password | `lab` |

## 常用指令

背景啟動：

```powershell
docker compose up --build -d
```

查看 app 即時日誌：

```powershell
docker compose logs -f app
```

停止服務：

```powershell
docker compose down
```

停止服務並刪除 volumes：

```powershell
docker compose down -v
```

> `docker compose down -v` 會刪除 `node_modules` 與 MySQL 資料 volume，僅在需要乾淨重建時使用。