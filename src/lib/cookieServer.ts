import { cookies } from 'next/headers'

export async function getCookieServer(){
  const cookiesger = await cookies();
  const token = cookiesger.get("session")?.value;  

  return token || null;
}