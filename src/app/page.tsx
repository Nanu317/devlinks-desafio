import { Avatar } from "../components/avatar";
import { Footer } from "../components/footer";
import { SocialLinks } from "../components/social-links";
import { LinkList } from "../components/link-list";
import { getProfile } from "../lib/hygraph";



export default async function Home() {
  const profile = await getProfile();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col items-center gap-8 px-6 py-16">
      <Avatar lightSrc={profile.avatarLight.url} darkSrc={profile.avatarDark.url} username={profile.username} />
      <LinkList links={profile.links} />
      <SocialLinks socials={profile.socials} />
      <Footer />
    </main>
  );
}
