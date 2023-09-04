import { getDirname, path } from '@vuepress/utils'
import { defaultTheme } from '@vuepress/theme-default'

const __dirname = getDirname(import.meta.url)

export default (options) => {
    return (app) => {
        return {
            name:"vuepress-theme-ssy",
            extends: defaultTheme(options)
        }
    }
}