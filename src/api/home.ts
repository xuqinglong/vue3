import http from '@/api/http'
import { AxiosPromise } from 'axios'

/**
 * 获取banner
 */
export const getBanner = (): AxiosPromise => {
  return http({
    url: '/banners',
    method: 'get'
  })
}
/**
 * 获取类型
 * @param type
 */
export const getTypeList = (type: string): AxiosPromise => {
  return http({
    url: `/categories/${type}`,
    method: 'get'
  })
}
/**
 * 获取列表
 * @param category
 * @param type
 * @param page
 * @param count
 */
export const getArticleList = (category: string, type: string, page: number, count: number): AxiosPromise => {
  return http({
    url: `data/category/${category}/type/${type}/page/${page}/count/${count}`,
    method: 'get'
  })
}
