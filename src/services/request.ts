import { Pagination, JobOffer, PaginationParams, JobRequirementSkill } from '@/types'
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

  async function getRequirementSkills(
    paginationParams: PaginationParams = defaultPaginationParams,
  ): Promise<Pagination<JobRequirementSkill>> {
    return await api.get('/job-requirement-skill/', { params: { ...paginationParams } })
  }

  return {
    getJobOffers,
    getOffersCategory,
    getRequirementSkills
  }
}
