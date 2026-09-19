type HeaderProps = {
    wardName: string;
};

export default function Header({ wardName }: HeaderProps) {
    return (
        <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                        Sacrament Meetings
                    </p>
                    <h1 className="text-xl font-semibold text-slate-900">{wardName}</h1>
                </div>
            </div>
        </header>
    );  
}