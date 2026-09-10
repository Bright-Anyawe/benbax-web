import {
  AlertTriangle,
  Bell,
  BookOpen,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Globe2,
  Laptop,
  LifeBuoy,
  MapPin,
  Presentation,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Users,
  Wifi,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';

type GuideListProps = {
  items: readonly string[];
  ordered?: boolean;
};

type GuideRole = {
  icon: LucideIcon;
  name: string;
  users: string;
  description: string;
};

type SetupGuide = {
  icon: LucideIcon;
  title: string;
  description: string;
  steps: readonly string[];
};

const PLATFORM_ROLES: readonly GuideRole[] = [
  {
    icon: Smartphone,
    name: 'Client App',
    users: 'Customers',
    description: 'Request rides or deliveries, view prices, follow job progress, and receive updates.',
  },
  {
    icon: MapPin,
    name: 'Driver / Rider App',
    users: 'Drivers and delivery riders',
    description: 'Receive available jobs, accept work, use navigation, update job status, and record completion.',
  },
  {
    icon: Laptop,
    name: 'Admin Web App',
    users: 'Platform administrators and operations staff',
    description: 'Monitor activity, manage users and partners, review jobs, and support daily operations.',
  },
];

const BEFORE_YOU_START = [
  'A smartphone for the Client App or Driver / Rider App.',
  'A reliable internet connection, such as mobile data or Wi-Fi.',
  'A working phone number or email address, if registration requests one.',
  'Location services enabled for maps, pickup, delivery, or dispatch features.',
  'Camera access for identity or document checks, if the Driver / Rider App requests it.',
  'Your administrator login for the Admin Web App.',
] as const;

const APP_CHOICES = [
  {
    title: 'Client App',
    description: 'For customers requesting a ride or delivery.',
    steps: [
      'Open Chrome, Safari, or another trusted browser on your phone.',
      'Enter benbaxco.com in the address bar and open the Client App or Customer App section.',
      'Confirm that the description identifies the customer app, then select the official download link.',
      'Open the downloaded file, follow the installation instructions, and continue to First-Time Setup.',
    ],
  },
  {
    title: 'Driver / Rider App',
    description: 'For approved drivers and delivery riders accepting Benbax Go work.',
    steps: [
      'Open a trusted browser and enter benbaxco.com in the address bar.',
      'Open the Driver App, Rider App, or Partner App section and confirm the app is for partners.',
      'Select the official download link, complete installation, then sign in or complete partner registration.',
      'Never install an APK sent through an unknown message, social media post, or unofficial website.',
    ],
  },
  {
    title: 'Admin Web App',
    description: 'For administrators. No mobile APK installation is required.',
    steps: [
      'Open a current web browser on a computer, tablet, or phone and go to benbaxco.com.',
      'Select the Admin Web App or Admin Login link published on the official website.',
      'Enter your administrator username, phone number, or email and password.',
      'Complete any additional security check, keep the admin link private, and sign out on shared devices.',
    ],
  },
] as const;

const SETUP_GUIDES: readonly SetupGuide[] = [
  {
    icon: Smartphone,
    title: 'Client App Setup',
    description: 'Create the account and permissions needed to request a ride or delivery.',
    steps: [
      'Open the Client App and select Create account or Register.',
      'Enter the requested name, phone number or email, and password.',
      'Enter the verification code if one is sent to you.',
      'Read and accept the terms and privacy information.',
      'Allow Location access and Notifications when asked.',
      'Check the pickup location, enter the destination and useful instructions, then review service type, price, and payment option.',
      'Tap Request, Book, or the equivalent action shown in the app and follow the request status.',
    ],
  },
  {
    icon: Users,
    title: 'Driver / Rider App Setup',
    description: 'Complete partner registration, required checks, permissions, and readiness steps.',
    steps: [
      'Select Sign in for an existing account or Register if new partner registration is available.',
      'Enter the requested personal and contact information.',
      'Complete identity, vehicle, or document checks when requested.',
      'Allow Location access, including background access when the app requires it for active jobs.',
      'Allow Notifications and Camera access when requested.',
      'Add or confirm vehicle and service information, then confirm that the account is approved or ready for work.',
    ],
  },
  {
    icon: Laptop,
    title: 'Admin Web App Setup',
    description: 'Use the operations dashboard to oversee users, partners, jobs, and support activity.',
    steps: [
      'Open the Admin Web App and sign in with the administrator account provided by the platform owner.',
      'Complete any security verification.',
      'Review dashboard cards, alerts, and current activity.',
      'Use the navigation to view the users, drivers or riders, requests, rides, deliveries, payments, and support items available to your role.',
      'Open a record before making a change and use only approved actions to update statuses, review documents, monitor jobs, or respond to support issues.',
      'Sign out when finished, especially on a shared or public computer.',
    ],
  },
];

const DAILY_USE = [
  {
    title: 'For Clients',
    icon: Smartphone,
    items: [
      'Check the pickup and destination before confirming a request.',
      'Keep notifications enabled while a ride or delivery is active.',
      'Follow live status in the app and use in-app support if there is a problem.',
      'Keep payment details and passwords private.',
    ],
  },
  {
    title: 'For Drivers and Riders',
    icon: MapPin,
    items: [
      'Check your network and battery before going online.',
      'Accept only work you can complete safely and confirm pickup and destination details.',
      'Update status promptly so the client and admin team see accurate information.',
      'Record delivery proof when the app requests a photo, signature, or note.',
    ],
  },
  {
    title: 'For Administrators',
    icon: Laptop,
    items: [
      'Review the dashboard regularly for new requests, alerts, and exceptions.',
      'Check user and partner records before changing account status.',
      'Monitor jobs that remain pending or appear delayed.',
      'Protect personal, location, payment, and identity information and record important operational actions.',
    ],
  },
] as const;

const TROUBLESHOOTING = [
  {
    issue: 'The app will not download',
    items: [
      'Check that you are using benbaxco.com and that your internet connection works.',
      'Make sure the phone has enough free storage and try again in a current browser.',
      'Ask an administrator to confirm that the official app link is active.',
    ],
  },
  {
    issue: 'Android will not install the app',
    items: [
      'Confirm that you downloaded the correct Client or Driver / Rider APK and that the file finished downloading.',
      'Follow the Allow from this source steps for the browser used to download it.',
      'Remove an incomplete download and download it again from the official website. Do not use a different website or message.',
    ],
  },
  {
    issue: 'Location or map features do not work',
    items: [
      'Turn on Location service and give Benbax Go the required location permission.',
      'For driver and rider work, allow background location if requested.',
      'Move outside or near a window if GPS is weak, check mobile data or Wi-Fi, and restart the app after changing permission.',
    ],
  },
  {
    issue: 'Notifications do not arrive',
    items: [
      'Turn on Benbax Go notifications in phone settings and remove battery restrictions if they stop background updates.',
      'Check that Do Not Disturb is off and that the app is signed in to the correct account.',
    ],
  },
  {
    issue: 'The app is slow or behaves unexpectedly',
    items: [
      'Close and reopen the app, check for a new version on benbaxco.com, and restart the phone.',
      'On Android, clear the app cache from Settings > Apps > Benbax Go > Storage. Do not clear app data unless you know your login details or support tells you to.',
      'Check your internet connection.',
    ],
  },
  {
    issue: 'The admin page does not open',
    items: [
      'Confirm that you are using the admin link published on benbaxco.com and try a current browser.',
      'Check your internet connection and confirm that your administrator account is active.',
      'Contact the platform owner if your password or access has expired.',
    ],
  },
] as const;

const StepList = ({ items, ordered = false }: GuideListProps) => {
  const List = ordered ? 'ol' : 'ul';

  return (
    <List className={ordered ? 'space-y-3' : 'space-y-2'}>
      {items.map((item, index) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
          {ordered ? (
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
              {index + 1}
            </span>
          ) : (
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
          )}
          <span>{item}</span>
        </li>
      ))}
    </List>
  );
};

export default function BenbaxGoGuide() {
  return (
    <Section background="white">
      <div id="benbax-go-guide" className="scroll-mt-28">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary-dark">
              <BookOpen className="h-4 w-4" />
              Benbax Go resources
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
              Benbax Go User &amp; Presentation Guide
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
              A practical guide for customers, drivers, delivery riders, administrators, and presentation attendees.
              The Client App starts a request, the Driver / Rider App completes the work, and the Admin Web App keeps
              the service visible and organized.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-semibold">
              <a href="#benbax-go-roles" className="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-primary hover:text-primary">
                Choose your app
              </a>
              <a href="#benbax-go-setup" className="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-primary hover:text-primary">
                First-time setup
              </a>
              <a href="#benbax-go-support" className="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-primary hover:text-primary">
                Troubleshooting &amp; support
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mx-auto mt-10 flex max-w-5xl items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950 md:p-6">
            <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
            <p className="text-sm leading-6 md:text-base">
              <strong>Security first.</strong> Download Benbax Go only from the official website,{' '}
              <a
                href="https://benbaxco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline decoration-amber-500 underline-offset-2 hover:text-amber-700"
              >
                benbaxco.com
              </a>
              . Check the address bar before downloading an app or entering a password. GeoAttend administrators
              should use the dedicated Admin Login button on the GeoAttend card above.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14">
            <div className="mb-7 max-w-3xl">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-primary">01 / At a glance</p>
              <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">One connected platform, three roles</h3>
              <p className="mt-3 text-slate-600">
                A client request enters the operations system, suitable work is sent to an available driver or rider,
                the client follows progress, and the administrator oversees the process.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {PLATFORM_ROLES.map((role) => {
                const Icon = role.icon;
                return (
                  <article key={role.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">{role.name}</h4>
                    <p className="mt-2 text-sm font-semibold text-primary-dark">{role.users}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{role.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-8 rounded-2xl bg-primary-dark p-6 text-white md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-primary-200">Simple example</p>
                <h3 className="text-2xl font-bold">How a request moves through Benbax Go</h3>
              </div>
              <ol className="grid flex-1 gap-3 sm:grid-cols-2 lg:max-w-3xl lg:grid-cols-5">
                {[
                  'The client enters a pickup point and destination.',
                  'Benbax Go creates the request and looks for an available partner.',
                  'A driver or rider sees and accepts the offer.',
                  'The partner completes the job and updates its status.',
                  'The client receives updates while the administrator monitors the job.',
                ].map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm leading-5 text-primary-50 lg:block">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs font-bold text-white lg:mb-3">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>

        <div id="benbax-go-roles" className="scroll-mt-28">
          <Reveal delay={180}>
            <div className="mt-16 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <ClipboardCheck className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold text-slate-900">Before you start</h3>
                </div>
                <p className="mb-6 text-sm leading-6 text-slate-600">
                  Have the right device, connectivity, permissions, and account information ready before setup.
                </p>
                <StepList items={BEFORE_YOU_START} />
              </div>

              <div className="rounded-2xl border border-primary/20 bg-white p-6 shadow-sm md:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <Globe2 className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">02 / Get the right app</p>
                    <h3 className="text-2xl font-bold text-slate-900">Choose the app for your role</h3>
                  </div>
                </div>
                <div className="space-y-3">
                  {APP_CHOICES.map((choice) => (
                    <details key={choice.title} className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <summary className="cursor-pointer list-none font-bold text-slate-900 marker:hidden group-open:text-primary">
                        <span className="flex items-center justify-between gap-4">
                          {choice.title}
                          <span className="text-xl font-normal text-primary transition-transform group-open:rotate-45">+</span>
                        </span>
                      </summary>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{choice.description}</p>
                      <div className="mt-4 border-t border-slate-200 pt-4">
                        <StepList items={choice.steps} ordered />
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-500" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-600">03 / Android safety</p>
                  <h3 className="text-2xl font-bold text-slate-900">Installing a website APK</h3>
                </div>
              </div>
              <p className="mb-5 text-sm leading-6 text-slate-600">
                Android may warn that a file downloaded directly from a website is an outside source. Continue only when
                the address is exactly benbaxco.com and the connection uses HTTPS.
              </p>
              <StepList
                ordered
                items={[
                  'Download the correct Client or Driver / Rider app from benbaxco.com.',
                  'Open the download from the notification or the Downloads folder.',
                  'If prompted, open Settings, choose the browser used for the download, and turn on Allow from this source.',
                  'Return to the file and tap Install anyway or Install.',
                  'After installation, turn Allow from this source off again for extra safety.',
                  'Open Benbax Go and complete setup. If the warning continues, stop and confirm the website and download before trying again.',
                ]}
              />
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary-50 p-6 md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <Smartphone className="h-6 w-6 text-primary-dark" />
                <h3 className="text-2xl font-bold text-slate-900">iPhone and iPad</h3>
              </div>
              <p className="text-sm leading-6 text-slate-700">
                Do not install an Android APK on an iPhone or iPad. Use the iOS download option provided by Benbax Go,
                if available, or follow the installation instructions shown on the official website.
              </p>
              <div className="mt-6 rounded-xl border border-primary/20 bg-white p-4 text-sm leading-6 text-slate-600">
                <Wifi className="mr-2 inline h-4 w-4 text-primary" />
                Keep a reliable mobile data or Wi-Fi connection available during download and setup.
              </div>
            </div>
          </div>
        </Reveal>

        <div id="benbax-go-setup" className="scroll-mt-28">
          <Reveal delay={220}>
            <div className="mt-16">
              <div className="mb-7 max-w-3xl">
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-primary">04 / First-time setup</p>
                <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">Get ready for your first task</h3>
                <p className="mt-3 text-slate-600">
                  Complete the setup that matches your role. Permission names can differ between phones and Android versions.
                </p>
              </div>
              <div className="grid gap-5 lg:grid-cols-3">
                {SETUP_GUIDES.map((guide) => {
                  const Icon = guide.icon;
                  return (
                    <article key={guide.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                      <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900">{guide.title}</h4>
                      </div>
                      <p className="mb-5 text-sm leading-6 text-slate-600">{guide.description}</p>
                      <StepList items={guide.steps} ordered />
                    </article>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-primary">Partner readiness</p>
                <h3 className="text-2xl font-bold text-slate-900">Go online and offline safely</h3>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-600">
                Background location can use more battery. Keep the phone charged and never use the app while driving.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                'Tap Go Online when ready to receive jobs.',
                'Keep location, mobile data, and notifications on while working.',
                'Review each offer before accepting and update statuses at the correct time.',
                'Tap Go Offline when finished or when you do not want new offers.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-16">
            <div className="mb-7 max-w-3xl">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-primary">05 / Everyday use</p>
              <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">Keep each workflow accurate and secure</h3>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {DAILY_USE.map((group) => {
                const Icon = group.icon;
                return (
                  <article key={group.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-5 flex items-center gap-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <h4 className="text-xl font-bold text-slate-900">{group.title}</h4>
                    </div>
                    <StepList items={group.items} />
                  </article>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-primary/20 bg-primary-50 p-6 md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <RefreshCw className="h-6 w-6 text-primary-dark" />
                <h3 className="text-2xl font-bold text-slate-900">Updates and maintenance</h3>
              </div>
              <p className="mb-5 text-sm leading-6 text-slate-700">
                Check the official website for the current app version or release date, then download the update for
                your role from benbaxco.com.
              </p>
              <StepList
                ordered
                items={[
                  'Confirm the download came from benbaxco.com.',
                  'Install the new version over the existing app when Android offers that option.',
                  'Open the app and confirm that you can sign in and see your normal information.',
                  'Keep the old app installed until the update works unless Android asks you to remove it.',
                ]}
              />
              <p className="mt-5 border-t border-primary/20 pt-4 text-sm leading-6 text-slate-600">
                Updates should normally keep your account and server-side records. Do not uninstall first unless support
                specifically instructs you to do so.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <Bell className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold text-slate-900">Permission reminder</h3>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                You can usually change permissions later in your phone&apos;s Settings &gt; Apps &gt; Benbax Go &gt;
                Permissions. The wording can differ by phone. Enable only the permissions needed for your role and the
                features you use.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: MapPin, label: 'Location' },
                  { icon: Bell, label: 'Notifications' },
                  { icon: Camera, label: 'Camera when requested' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="rounded-xl bg-slate-50 p-4 text-center text-sm font-semibold text-slate-700">
                    <Icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div id="benbax-go-support" className="scroll-mt-28">
          <Reveal delay={300}>
            <div className="mt-16">
              <div className="mb-7 max-w-3xl">
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-primary">06 / Help</p>
                <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">Troubleshooting and support</h3>
                <p className="mt-3 text-slate-600">
                  Work through the matching issue below before contacting the platform owner.
                </p>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {TROUBLESHOOTING.map((item) => (
                  <details key={item.issue} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <summary className="cursor-pointer list-none font-bold text-slate-900 marker:hidden group-open:text-primary">
                      <span className="flex items-center justify-between gap-4">
                        {item.issue}
                        <span className="text-xl font-normal text-primary transition-transform group-open:rotate-45">+</span>
                      </span>
                    </summary>
                    <div className="mt-4 border-t border-slate-100 pt-4">
                      <StepList items={item.items} />
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={320}>
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-2xl bg-slate-900 p-6 text-white md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <LifeBuoy className="h-6 w-6 text-primary-300" />
                <h3 className="text-2xl font-bold">When asking for support</h3>
              </div>
              <p className="mb-5 text-sm leading-6 text-slate-300">
                Include the app, device or browser, attempted action, exact error, approximate time, and a safe
                screenshot when appropriate.
              </p>
              <StepList
                items={[
                  'Which app you used: Client, Driver / Rider, or Admin Web App.',
                  'Your phone or browser type and app version, if visible.',
                  'What you were trying to do and the exact message shown.',
                  'The approximate time the problem occurred.',
                  'A screenshot only if it does not reveal a password, payment details, or other private information.',
                ]}
              />
              <p className="mt-5 border-t border-white/10 pt-4 text-sm font-semibold leading-6 text-amber-200">
                Never send a password, full card number, one-time verification code, or identity document through an
                unapproved channel.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <Presentation className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">07 / Presentation companion</p>
                  <h3 className="text-2xl font-bold text-slate-900">A simple demonstration order</h3>
                </div>
              </div>
              <StepList
                ordered
                items={[
                  'Show the Benbax Go website at benbaxco.com.',
                  'Point out the separate Client App and Driver / Rider App download choices.',
                  'Explain that administrators use a browser instead of installing an APK.',
                  'Demonstrate a client request with pickup, destination, and confirmation.',
                  'Show a driver or rider going online and responding to a job offer.',
                  'Show job progress, completion updates, and the admin dashboard.',
                  'Mention that the Android warning comes from direct website distribution and is not a different Benbax Go system.',
                ]}
              />
              <div className="mt-6 rounded-xl border border-primary/20 bg-white p-4 text-sm leading-6 text-slate-700">
                <strong className="text-primary-dark">Key points to repeat:</strong> Start at the official website,
                choose the app for your role, keep location and notifications available for mobile workflows, go offline
                when not accepting work, protect admin credentials, and report problems with the app name, action,
                message, time, and a safe screenshot.
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-8 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary-50 to-amber-50 p-6 text-center md:p-8">
            <p className="text-lg font-semibold leading-8 text-primary-dark md:text-xl">
              Benbax Go is one connected service: the Client App starts the request, the Driver / Rider App completes
              the work, and the Admin Web App helps the team keep the service safe, visible, and organized.
            </p>
            <p className="mt-3 text-sm text-slate-600">Based on the supplied Benbax Go User and Presentation Guide.</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
