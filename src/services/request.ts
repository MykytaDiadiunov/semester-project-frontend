import { Pagination, JobOffer, PaginationParams } from '@/types'
import { apiService } from './api'

export const requestService = () => {
  const api = apiService()
  const defaultPaginationParams: PaginationParams = {
    page: 1,
    page_size: 10,
  }

  async function getJobOffers(
    paginationParams: PaginationParams = defaultPaginationParams,
  ): Promise<Pagination<JobOffer>> {
    return await api.get('/job-offers/', { params: { ...paginationParams } })
  }

  async function getOffersCategory(
    paginationParams: PaginationParams = defaultPaginationParams,
  ): Promise<Pagination<string>> {
    return await api.get('/job-offers/offers-category/', { params: { ...paginationParams } })
  }

  return {
    getJobOffers,
    getOffersCategory,
  }
}
