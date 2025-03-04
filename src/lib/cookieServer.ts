import { cookies } from 'next/headers'

export function getCookieServer(){
  const cookiesger = cookies();
  const token = cookiesger.get("session")?.value;  

  return token || null;
}