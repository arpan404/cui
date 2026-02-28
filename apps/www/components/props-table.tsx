export interface PropDef {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export function PropsTable({ props }: { props: PropDef[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="text-left px-4 py-2.5 font-medium">Prop</th>
            <th className="text-left px-4 py-2.5 font-medium">Type</th>
            <th className="text-left px-4 py-2.5 font-medium">Default</th>
            <th className="text-left px-4 py-2.5 font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b border-border last:border-0">
              <td className="px-4 py-2.5 font-mono text-xs text-primary">{prop.name}</td>
              <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">{prop.type}</td>
              <td className="px-4 py-2.5 font-mono text-xs">{prop.default ?? '-'}</td>
              <td className="px-4 py-2.5 text-muted-foreground">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
