import { redirect } from "next/navigation";

type Props = {
  params: { path: string };
};

export default function PluginPageRedirect({ params: { path } }: Props) {
  redirect(`/en/plugin/${path}`);
  return null;
}
