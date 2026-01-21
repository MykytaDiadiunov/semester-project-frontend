export interface Filter {
  offer_category__in: Array<string>
  requirement_skills__skill_id__in: Array<number>
}

export interface FilterParams {
  title?: string;
  title__icontains?: string;

  company_city?: string;
  company_city__icontains?: string;

  location?: string;
  location__icontains?: string;

  salary_value_from__gte?: number;
  salary_value_from__lte?: number;
  salary_value_from__isnull?: boolean;

  salary_value_to__gte?: number;
  salary_value_to__lte?: number;
  salary_value_to__isnull?: boolean;

  offer_category?: string;
  offer_category__in?: string | string[];

  working_time_type?: string;
  working_time_type__in?: string | string[];

  work_place_type?: string;
  work_place_type__in?: string | string[];

  requirement_skills__skill_title?: string;
  requirement_skills__skill_id__in?: string | string[];

  requirement_skills__skill_level?: number;
  requirement_skills__skill_level__gte?: number;
  requirement_skills__skill_level__lte?: number;

  date?: string;
}