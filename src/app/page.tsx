import { Avatar } from "../components/avatar";
import { Footer } from "../components/footer";
import { SocialLinks } from "../components/social-links";
import { LinkList } from "../components/link-list";
import { getProfile } from "../lib/hygraph";
import { ThemeToggle } from "../components/theme-toggle";



export default async function Home() {
  const profile = await getProfile();
  console.log(profile.socials)

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[588px] flex-col items-center gap-8 pt-14">
      <Avatar lightSrc={profile.avatarLight.url} darkSrc={profile.avatarDark.url} username={profile.username} />
      <ThemeToggle />
      <LinkList links={profile.links} />
      <SocialLinks socials={profile.socials} />
      <Footer />
    </main>
  );
}
