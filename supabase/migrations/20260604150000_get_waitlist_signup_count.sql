create or replace function public.get_waitlist_signup_count()
returns integer
language sql
security definer
set search_path = public
as $$
  select count(*)::integer
  from public.waitlist_signups;
$$;

revoke all on function public.get_waitlist_signup_count() from public;
grant execute on function public.get_waitlist_signup_count() to anon;
grant execute on function public.get_waitlist_signup_count() to authenticated;
