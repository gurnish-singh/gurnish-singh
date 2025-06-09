import AppDrawer from "@/components/AppDrawer";

function App() {
    return (
        <>
            <AppDrawer />
            <main className="p-4">
                {/* Your page content with corresponding section IDs */}
                <section id="education" className="py-10">Education Section</section>
                <section id="skills" className="py-10">Skills Section</section>
                <section id="experience" className="py-10">Experience Section</section>
                <section id="blog" className="py-10">Blog Section</section>
                <section id="contact" className="py-10">Contact Section</section>
            </main>
        </>
    );
}

export default App;