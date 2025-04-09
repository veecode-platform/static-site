import { redirect } from 'next/navigation';

export default function NewsletterPageRedirect() {
  redirect('/pt/newsletter');
  return null;
}
