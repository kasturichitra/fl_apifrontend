import { ApiReferences, GuidesData, releaseNotes } from "../utils/constant";

// Helper to flatten GuidesData
const generateGuideSearchItems = (guidesData) => {
  const items = [];
  guidesData.forEach((section) => {
    section.pages?.forEach((page) => {
      items.push({
        title: page.title,
        path: `/guides/${page.slug}`,
        category: "Guides",
      });
    });
  });
  return items;
};

// Helper to flatten ApiReferences
const generateApiSearchItems = (apiReferences) => {
  const items = [];
  apiReferences.forEach((section) => {
    section.items?.forEach((item) => {
      items.push({
        title: item.title,
        path: `/reference/${item.link}`,
        category: "API Reference",
      });

      // Include methods if they exist
      item.methods?.forEach((method) => {
        items.push({
          title: method.title,
          path: `/reference/${method.link}`,
          category: "API Reference",
        });
      });
    });
  });
  return items;
};

// Changelog / Release Notes (from GuidesData "Changelog" section)
const generateReleaseNotesItems = (releaseNotes) => {
  // const changelogSection = releaseNotes.find((s) => s.title === "Changelog");
  // if (!changelogSection) return [];
  return releaseNotes.map((page) => ({
    title: page.title,
    path: `/changelog#${page.editType}`,
    category: "Release Notes",
  }));
};

// Combine all items
export const searchItems = [
  ...generateGuideSearchItems(GuidesData),
  ...generateApiSearchItems(ApiReferences),
  ...generateReleaseNotesItems(releaseNotes),
];
