require('dotenv').config();
const app = require('./app');
const { connectDB } = require('./src/config/sqlServer.config');

const PORT = process.env.PORT || 3000

async function startServer() {
    try {
        // 連接資料庫
        await connectDB();
        
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
    }
}

// 處理未捕獲的異常
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
});

// 處理未處理的 Promise 拒絕
process.on('unhandledRejection', (error) => {
    console.error('Unhandled Rejection:', error);
    process.exit(1);
});

startServer();