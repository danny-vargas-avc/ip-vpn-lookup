import type { IpData } from '../../data/types'

const FIELDS = 'status,query,country,countryCode,regionName,city,isp,org,as,proxy,hosting,mobile,lat,lon,timezone'

export default defineEventHandler(async (event): Promise<IpData> => {
  const forwarded = getRequestHeader(event, 'x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0].trim() : ''

  const { ipApiKey } = useRuntimeConfig()
  const url = ipApiKey
    ? `https://pro.ip-api.com/json/${ip}?key=${ipApiKey}&fields=${FIELDS}`
    : `http://ip-api.com/json/${ip}?fields=${FIELDS}`

  return $fetch<IpData>(url)
})
