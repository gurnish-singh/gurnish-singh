import tardis from 'src/assets/images/telephone_booth.gif';
export default function TimePortal() {
  return (
    <div className="group">
      <img
        src={tardis} // use from /public instead of src/assets for public paths
        alt="Time Travel Portal"
        className="w-20 h-auto cursor-pointer transition-transform duration-300 group-hover:scale-110"
        onClick={() =>
          window.open('https://gurnish-singh.github.io/resume-app/', '_blank')
        }
      />
    </div>
  );
}
