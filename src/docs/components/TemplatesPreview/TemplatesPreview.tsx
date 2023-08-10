import { TemplatesMinimalAvailable } from "./MinimalAvailable";
import { TemplatesComingSoon } from "./ComingSoon";

export const TemplatesPreview = () => (
  <div className="flex flex-col gap-8 md:gap-16">
    <TemplatesMinimalAvailable />
    <TemplatesComingSoon />
  </div>
);
