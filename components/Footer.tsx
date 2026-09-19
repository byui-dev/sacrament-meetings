export default function Footer() {
    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <footer className="border-t border-slate-200 bg-slate-50">
            <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-3">
                <p className="text-sm text-slate-600">{ today}</p>
            </div>
        </footer>
    );
}    