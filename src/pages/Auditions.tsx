import NavBar from "../components/NavBar";

function Auditions() {
  return (
    <>
      <section className="landing" id="auditions-landing">
        <NavBar />
        <div className="landing-title">
          <h1>AUDITIONS</h1>
        </div>
      </section>

      <section>
        <p className="f">
          Our next round of auditions will take place in fall 2024. We are
          looking for lower voices (alto, tenors, baritones, and basses) as well
          as vocal percussionists. All genders are welcome. Don’t be reluctant
          if you haven’t had a lot of experience with singing. We have seen many
          of our members grow greatly as singers during their time in the group.
          Please email us at noteworthy@ucchoral.berkeley.edu.
        </p>
      </section>
    </>
  );
}

export default Auditions;
