/**
 * Projects layout — wraps the catalog and each project page.
 *
 * The list lives in `projects/index.tsx` and a single project in
 * `projects/$slug.tsx`. This route only renders the matched child.
 */
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: ProjectsLayout,
});

function ProjectsLayout() {
  return <Outlet />;
}
