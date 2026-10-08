export function LabDiagram() {
  return (
    <svg viewBox="0 0 640 280" className="h-auto w-full" role="img" aria-label="Home lab architecture diagram">
      <rect width="640" height="280" rx="12" fill="#0b1220" />
      <text x="20" y="28" fill="#94a3b8" fontSize="12">Home lab · segmented practice network</text>
      <g>
        <rect x="20" y="50" width="150" height="90" rx="8" fill="#122033" stroke="#2dd4bf" />
        <text x="32" y="74" fill="#e7eef8" fontSize="13">Identity</text>
        <text x="32" y="94" fill="#94a3b8" fontSize="11">Windows Server</text>
        <text x="32" y="110" fill="#94a3b8" fontSize="11">AD · DNS · DHCP · NPS</text>
        <rect x="190" y="50" width="150" height="90" rx="8" fill="#122033" stroke="#38bdf8" />
        <text x="202" y="74" fill="#e7eef8" fontSize="13">Routing lab</text>
        <text x="202" y="94" fill="#94a3b8" fontSize="11">GNS3 · Cisco</text>
        <text x="202" y="110" fill="#94a3b8" fontSize="11">OSPF · BGP · HSRP</text>
        <rect x="360" y="50" width="150" height="90" rx="8" fill="#122033" stroke="#2dd4bf" />
        <text x="372" y="74" fill="#e7eef8" fontSize="13">Edge</text>
        <text x="372" y="94" fill="#94a3b8" fontSize="11">Cisco ASAv</text>
        <text x="372" y="110" fill="#94a3b8" fontSize="11">VPN · firewall policy</text>
        <rect x="520" y="50" width="100" height="90" rx="8" fill="#122033" stroke="#38bdf8" />
        <text x="532" y="78" fill="#e7eef8" fontSize="13">Security</text>
        <text x="532" y="98" fill="#94a3b8" fontSize="11">Kali</text>
        <text x="532" y="114" fill="#94a3b8" fontSize="11">OpenVAS</text>
      </g>
      <path d="M95 140 V180 H545 V140" fill="none" stroke="#334155" />
      <rect x="20" y="190" width="600" height="64" rx="8" fill="#10192b" stroke="#334155" />
      <text x="36" y="216" fill="#e7eef8" fontSize="13">Segmentation</text>
      <text x="36" y="236" fill="#94a3b8" fontSize="11">VLANs · VirtualBox / VMware hosts · clients kept off the security segment</text>
    </svg>
  );
}

export function ConceptVisual({ kind }: { kind: string }) {
  const title = kind === "vuka" ? "Vuka Mzansi" : kind === "taxi" ? "Township routes" : "Local sites";
  const lines = kind === "vuka"
    ? ["UIF steps", "CV builder", "Work resources"]
    : kind === "taxi"
      ? ["Area routes", "Stop notes", "Local transport"]
      : ["Emajiteni Braai", "Mzoli's", "Teez Lounge"];
  return (
    <svg viewBox="0 0 640 280" className="h-auto w-full" role="img" aria-label={`${title} concept preview`}>
      <rect width="640" height="280" rx="12" fill="#0b1220" />
      <rect x="36" y="28" width="250" height="224" rx="10" fill="#121a2b" stroke="#1e293b" />
      <text x="52" y="58" fill="#2dd4bf" fontSize="12">{title}</text>
      {lines.map((line, i) => (
        <g key={line}>
          <rect x="52" y={78 + i * 48} width="210" height="36" rx="6" fill="#0c1424" />
          <text x="66" y={101 + i * 48} fill="#e7eef8" fontSize="13">{line}</text>
        </g>
      ))}
      <text x="320" y="120" fill="#94a3b8" fontSize="13">Concept preview</text>
      <text x="320" y="144" fill="#64748b" fontSize="12">Screenshot slot — add an image</text>
      <text x="320" y="164" fill="#64748b" fontSize="12">in public/projects when ready.</text>
    </svg>
  );
}
