import { cookies } from 'next/headers'

export function getCookieServer(){
  return cookies().then(cookieStore => cookieStore.get("sessão")?.value || null); 
}