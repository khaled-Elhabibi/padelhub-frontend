import { useState, type ReactNode } from 'react'
import {
  Avatar,
  BrandLockup,
  Button,
  CourtCard,
  Icon,
  LevelBadge,
  MatchCard,
  OpenSpot,
  PhoneField,
  SearchField,
  SegmentedControl,
  StatusBadge,
  Tag,
  TextField,
  TimeSlot,
} from '../components/ui'

/** Living reference for the Padel design system. Every component, every state, in the current theme. */

const swatches = [
  'surface',
  'surface-raised',
  'surface-inverse',
  'border',
  'border-strong',
  'text',
  'text-body',
  'text-muted',
  'primary',
  'primary-tint',
  'accent',
  'accent-tint',
  'success',
  'warning',
  'danger',
  'disabled-bg',
]

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="type-caption m-0 text-text-muted">{title}</h2>
      {children}
    </section>
  )
}

export function DesignSystemPage() {
  const [surface, setSurface] = useState<'indoor' | 'outdoor' | 'any'>('indoor')
  const [slot, setSlot] = useState('19:30')
  const [courtSlot, setCourtSlot] = useState('19:30')

  return (
    <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-4 py-12 sm:px-6">
      <header className="flex flex-col gap-3">
        <span className="type-caption text-primary">Padel design system</span>
        <h1 className="type-display-l m-0">Components</h1>
        <p className="type-body-l m-0 max-w-[40rem] text-text-body">
          Built from docs/design-system. Switch the theme in the header to check light and dark.
        </p>
      </header>

      <Section title="Color tokens">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {swatches.map((name) => (
            <div key={name} className="flex min-w-0 flex-col gap-1.5">
              <div className="h-14 rounded-md border border-border" style={{ background: `var(--${name})` }} />
              <code className="truncate text-xs font-bold text-text-body">{name}</code>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Brand">
        <div className="flex rounded-lg bg-primary p-6">
          <BrandLockup />
        </div>
      </Section>

      <Section title="Type">
        <div className="flex flex-col gap-3">
          <p className="type-display-xl m-0">Game on</p>
          <p className="type-display-m m-0">Court 3 is free</p>
          <p className="type-numeric-l m-0 text-primary">6–4 7–5</p>
          <p className="type-title-l m-0">Open matches near you</p>
          <p className="type-body-m m-0 text-text-body">Courts are held while you check out.</p>
          <p className="type-caption m-0 text-text-muted">Indoor · 90 min</p>
        </div>
      </Section>

      <Section title="Buttons">
        <div className="flex flex-wrap items-center gap-3">
          <Button>Join match</Button>
          <Button variant="accent">Book court</Button>
          <Button variant="secondary">Invite</Button>
          <Button variant="outline">Continue with Google</Button>
          <Button variant="ghost">See all</Button>
          <Button variant="danger">Cancel match</Button>
          <Button disabled>Join match</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="lg">Large 56</Button>
          <Button>Medium 48</Button>
          <Button size="sm">Small 40</Button>
          <Button variant="accent" iconOnly aria-label="Add player">
            <Icon name="plus" size={22} strokeWidth={2.4} />
          </Button>
          <Button variant="secondary">
            <Icon name="calendar" size={20} />
            Pick a date
          </Button>
        </div>
      </Section>

      <Section title="Badges and avatars">
        <div className="flex flex-wrap items-center gap-2.5">
          <StatusBadge status="open" />
          <StatusBadge status="full" />
          <StatusBadge status="confirmed" />
          <StatusBadge status="almost-full" />
          <StatusBadge status="cancelled" />
          <Tag tone="primary">Level 3.0–4.0</Tag>
          <Tag>Doubles</Tag>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {[1.5, 2.5, 3.5, 5, 6.5].map((l) => (
            <LevelBadge key={l} level={l} />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Avatar initials="SK" size={32} />
          <Avatar initials="OM" tone="ink" size={40} />
          <Avatar initials="LN" tone="lime" size={56} />
          <Avatar initials="AH" tone="primary" size={72} />
          <OpenSpot />
        </div>
      </Section>

      <Section title="Fields">
        <div className="grid max-w-3xl gap-x-4 gap-y-5 sm:grid-cols-2">
          <TextField label="Full name" placeholder="Your name" helper="Shown on your player card" />
          <TextField label="Phone" defaultValue="01 2345" error="Enter a valid phone number" />
          <TextField label="Club" defaultValue="Set at booking" disabled helper="Disabled" />
          <SearchField label="Search clubs or courts" className="self-end" />
          <PhoneField label="Phone number" placeholder="Your mobile number" helper="We text you a 6-digit code." />
          <PhoneField label="Phone number" defaultValue="0123" error="Enter a valid phone number" />
        </div>
      </Section>

      <Section title="Selection">
        <SegmentedControl
          label="Court surface"
          value={surface}
          onChange={setSurface}
          options={[
            { value: 'indoor', label: 'Indoor' },
            { value: 'outdoor', label: 'Outdoor' },
            { value: 'any', label: 'Any' },
          ]}
        />
        <div className="flex flex-wrap gap-2.5" role="group" aria-label="Start time">
          <TimeSlot time="18:00" selected={slot === '18:00'} onClick={() => setSlot('18:00')} />
          <TimeSlot time="19:30" selected={slot === '19:30'} onClick={() => setSlot('19:30')} />
          <TimeSlot time="20:30" state="peak" selected={slot === '20:30'} onClick={() => setSlot('20:30')} />
          <TimeSlot time="21:00" state="booked" />
        </div>
      </Section>

      <Section title="Cards">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CourtCard
            clubName="Club name"
            price={280}
            meta="1.2 km · 6 courts"
            surface="Indoor"
            slots={[{ time: '18:00' }, { time: '19:30' }, { time: '21:00', state: 'booked' }]}
            selectedTime={courtSlot}
            onSelectTime={setCourtSlot}
          />
          <MatchCard
            dayLabel="Tonight"
            timeRange="19:30–21:00"
            venue="Club name · Court 2 · Indoor"
            levelRange="Level 3.0–4.0"
            players={[
              { initials: 'SK', level: 3.4 },
              { initials: 'OM', level: 3.8 },
              { initials: 'LN', level: 3.1 },
            ]}
            pricePerPlayer={70}
          />
          <CourtCard
            clubName="Club name"
            price={240}
            meta="3.4 km · 4 courts"
            surface="Outdoor"
            accent={false}
          />
        </div>
      </Section>
    </div>
  )
}
