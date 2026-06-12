"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";
import { apiVersion, dataset, projectId } from "./sanity/env";

const singletons = [
  { type: "siteSettings", title: "Site settings" },
  { type: "homePage", title: "Home page" },
  { type: "servicesPage", title: "Services page" },
  { type: "expectPage", title: "What to Expect page" },
  { type: "aboutPage", title: "About page" },
  { type: "faqPage", title: "FAQ page" },
  { type: "policiesPage", title: "Policies page" },
];

export default defineConfig({
  basePath: "/studio",
  projectId: projectId || "placeholder",
  dataset,
  title: "Welch Physiotherapy",
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            ...singletons.map((s) =>
              S.listItem()
                .title(s.title)
                .id(s.type)
                .child(
                  S.document().schemaType(s.type).documentId(s.type),
                ),
            ),
            S.divider(),
            S.documentTypeListItem("service").title("Services"),
            S.documentTypeListItem("expectStep").title("What-to-expect steps"),
            S.documentTypeListItem("testimonial").title("Testimonials"),
            S.documentTypeListItem("faq").title("FAQs"),
            S.documentTypeListItem("policy").title("Policies"),
          ]),
    }),
  ],
  apiVersion,
});
