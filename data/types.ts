export interface Faq {
  question: string
  answer: string
}

export interface IpData {
  status: 'success' | 'fail'
  query: string
  country: string
  countryCode: string
  regionName: string
  city: string
  isp: string
  org: string
  as: string
  proxy: boolean
  hosting: boolean
  mobile: boolean
  lat: number
  lon: number
  timezone: string
}
