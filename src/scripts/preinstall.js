if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn('\x1B[33m⚠️ 请使用 pnpm 安装依赖\x1B[0m')
  process.exit(1)
}
