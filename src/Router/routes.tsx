import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from '@tanstack/react-router';
import RootLayout from '../layouts/RootLayout';
import InboxPage from '../components/pages/InboxPage';
import ArchivePage from '../components/pages/ArchivePage';

const rootRoute = createRootRoute({
  component: () => (
    <RootLayout>
      <Outlet />
    </RootLayout>
    
  ),
});

// Child hete
const inboxRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: InboxPage,
});

const archiveRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/archive',
  component: ArchivePage,
});

export const router = createRouter({
  routeTree: rootRoute.addChildren([inboxRoute, archiveRoute]),
});