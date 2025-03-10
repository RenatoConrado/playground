import reviews from "./reviews";
import type { Profile } from "./types";

function renderProfile(profile: Profile, personId: number): void {
  const item = reviews.find(p => p.id === personId);
  if (!item) {
    throw new RangeError("Profile not found");
  }

  profile.img.src = item.img;
  profile.img.alt = `Profile of ${item.name}`;

  profile.author.textContent = item.name;
  profile.job.textContent = item.job;
  profile.info.textContent = item.text;
}

export default renderProfile;