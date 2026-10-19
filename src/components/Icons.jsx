// Lightweight inline icon set — avoids pulling in an icon dependency.

function Svg({ children, size = 24, filled = false, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={filled ? undefined : 1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  )
}

export const GithubIcon = (p) => (
  <Svg filled {...p}>
    <path d="M12 .5A11.5 11.5 0 0 0 .5 12.02c0 5.09 3.29 9.41 7.86 10.93.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.37-3.88-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.78 2.7 1.27 3.36.97.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.05 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.26 5.69.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12.02 11.5 11.5 0 0 0 12 .5Z" />
  </Svg>
)

export const LinkedinIcon = (p) => (
  <Svg filled {...p}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </Svg>
)

export const MailIcon = (p) => (
  <Svg {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3 7 8.2 5.6a1.5 1.5 0 0 0 1.6 0L21 7" />
  </Svg>
)

export const DownloadIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3v12" />
    <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
    <path d="M4.5 20.5h15" />
  </Svg>
)

export const ArrowRightIcon = (p) => (
  <Svg {...p}>
    <path d="M5 12h14" />
    <path d="m13 5 7 7-7 7" />
  </Svg>
)

export const ArrowUpRightIcon = (p) => (
  <Svg {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </Svg>
)

export const ArrowUpIcon = (p) => (
  <Svg {...p}>
    <path d="M12 19V5" />
    <path d="m6 11 6-6 6 6" />
  </Svg>
)

export const MenuIcon = (p) => (
  <Svg {...p}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </Svg>
)

export const CloseIcon = (p) => (
  <Svg {...p}>
    <path d="M6 6l12 12" />
    <path d="M18 6 6 18" />
  </Svg>
)

export const SunIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </Svg>
)

export const MoonIcon = (p) => (
  <Svg {...p}>
    <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </Svg>
)

export const MapPinIcon = (p) => (
  <Svg {...p}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </Svg>
)

export const CalendarIcon = (p) => (
  <Svg {...p}>
    <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
    <path d="M8 3v4M16 3v4M3.5 10h17" />
  </Svg>
)

export const CodeIcon = (p) => (
  <Svg {...p}>
    <path d="m9 8-4 4 4 4" />
    <path d="m15 8 4 4-4 4" />
  </Svg>
)

export const ServerIcon = (p) => (
  <Svg {...p}>
    <rect x="3.5" y="4" width="17" height="7" rx="2" />
    <rect x="3.5" y="13" width="17" height="7" rx="2" />
    <path d="M7.5 7.5h.01M7.5 16.5h.01" />
  </Svg>
)

export const DatabaseIcon = (p) => (
  <Svg {...p}>
    <ellipse cx="12" cy="6" rx="7" ry="3" />
    <path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
    <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
  </Svg>
)

export const CpuIcon = (p) => (
  <Svg {...p}>
    <rect x="6" y="6" width="12" height="12" rx="2.5" />
    <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
    <path d="M9 2.5v2M15 2.5v2M9 19.5v2M15 19.5v2M2.5 9h2M2.5 15h2M19.5 9h2M19.5 15h2" />
  </Svg>
)

export const GraduationIcon = (p) => (
  <Svg {...p}>
    <path d="M12 4 2.5 9 12 14l9.5-5L12 4Z" />
    <path d="M6 11v5c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5" />
    <path d="M21.5 9v5" />
  </Svg>
)

export const AwardIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="9" r="5.5" />
    <path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7" />
  </Svg>
)

export const BriefcaseIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="7" width="18" height="13" rx="2.5" />
    <path d="M8.5 7V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V7" />
    <path d="M3 12h18" />
  </Svg>
)

export const LayersIcon = (p) => (
  <Svg {...p}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </Svg>
)

export const SparkIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="m6.3 6.3 2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />
  </Svg>
)

export const CheckIcon = (p) => (
  <Svg {...p}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </Svg>
)
