# Content Triage Log

This is a living record of our page-by-page audit of the legacy GLAAM WordPress site. As we review each page, we log the decision here to ensure we don't rely purely on memory.

## Triage Key
- 🟢 **PORT**: Keep it, build a dedicated new page for it.
- 🟡 **CONSOLIDATE**: Keep the content, but merge it into another page/section to reduce clutter.
- 🔴 **KILL**: Retire the content entirely.

---

## The Log

### 1. `/areas/` (and its 6 sub-pages)
* **Status**: ✅ **DONE (Merged into /about/)**
* **Plan**: Kill the dedicated page and the individual map sub-pages. Extract the 6 local area names and the existing photos from `public/` to build a sleek "Our Territory" photo grid section on the new **About** page.

### 2. `/awards/` (and its 4 sub-pages: Member, Rookie, Hall of Fame, Certs)
* **Status**: 🟡 **CONSOLIDATE / DEMOTE**
* **Plan**: Combine all 5 pages into a single, modern `/awards/` page. Use a tabbed interface or accordion to house the dense historical names/dates without overwhelming the user. Remove from top-level header navigation; link to it instead from the **Member Resources** sidebar and the site Footer.

### 3. `/bylaws/`
* **Status**: ✅ **DONE (Ported to Sidebar AI Link)**
* **Plan**: Kill the dedicated page and the giant list of PDF links. Replace it entirely with a single "Bylaws AI Explorer" card on the **Member Resources** page that directly links to the custom NotebookLM chatbot we created.

### 4. `/contacts/`
* **Status**: ✅ **DONE (Ported to /contact/)**
* **Plan**: Keep this as a top-level page (`contact.njk`). We extracted the board members, executive officers, and mailing address to build a clean, modern card grid. It's essential functional info that belongs in the main header nav.

### 5. `/elections/`
* **Status**: 🔴 **KILL**
* **Plan**: Retire completely. It's a placeholder with no functional value. If the Elections Committee ever actually digitizes their petition/ballot process, we can build a purpose-made page with a real form or integration at that time.

### 6. `/finance/`
* **Status**: 🔴 **KILL / REPLACE**
* **Plan**: Retire this massive list of `.xlsx` downloads. Replace the entire page functionality with a single "Financial Documents" link on the **Member Resources** page pointing to the new shared Dropbox folder once the Board sets it up.

### 7. `/gifted-youth/`
* **Status**: ✅ **DONE (Merged into /events/)**
* **Plan**: Kill the dedicated page (another "for future use" placeholder shouldn't have its own top-level URL). Instead, we extracted the two paragraphs of explanation and built a sleek "Gifted Youth Program" callout card on the new **Events** page.

### 8. `/history/` (and its sub-pages: Summary, Chronology, Officer Listings)
* **Status**: 🟡 **CONSOLIDATE / DEMOTE**
* **Plan**: Treat this exactly like the `/awards/` page. We absolutely preserve the sentimental data, but we kill the multi-page routing structure. We will combine this with the Awards content into a single, beautifully organized `/history/` (or `/archives/`) page using a tabbed interface. Linked from the **Member Resources** page and Footer, not the main navigation.

### 9. `/meetings/` & `/motions/` (and their sub-pages)
* **Status**: 🔴 **KILL / REPLACE**
* **Plan**: Retire the link-farms of PDFs and `.doc` files mapping back to 1988. Consolidate meeting minutes, motions, and financial documents (from `/finance/`) into a single "Chapter Records & Files" card on the **Member Resources** page pointing to the new shared Dropbox/cloud folder.

### 10. `/newsletter/`
* **Status**: 🟡 **CONSOLIDATE / DEMOTE**
* **Plan**: Kill the standalone page. Since the links just go to Mensa Connect anyway, we don't need a whole routing page for it. Instead, we keep a dedicated "L.A. Mentary Newsletter" callout/button on the **Member Resources** page (we actually already scaffolded a Quick Link card for this!) that points straight to the forum where they can download it. 

### 11. `/open-forum/`
* **Status**: 🔴 **KILL**
* **Plan**: Another "reserved for future use" placeholder. Retire completely. If the Open Forum program is ever revitalized, it can easily just be an event series hosted on the Luma calendar, or we can whip up a new active page at that time.

### 12. `/regional-gathering/` (and its yearly sub-pages like `/2025/`)
* **Status**: ✅ **DONE (Merged into /events/)**
* **Plan**: The RG is the biggest event of the year, but it doesn't need a sprawling, permanent 10-page structure. 
    1. **Historical RGs**: Those links (2019-2025) get folded into our new tabbed `/history/` page as an "RG Archive" tab.
    2. **The Event Itself**: We build a massive, permanent "Featured Event: StaRGazing Regional Gathering" spotlight section at the top of the new **Events** page (`events.njk`). 
    3. When tickets for 2026 go live, that spotlight simply links out to the actual ticketing/Luma page instead of requiring a manual WordPress sub-page to be built.

### 13. `/scholarships/`
* **Status**: ✅ **DONE (Merged into /about/)**
* **Plan**: Kill the dedicated page. The Scholarship program is an amazing public outreach tool, but it's run by the National Mensa Foundation, not locally. We don't need a whole page just to be a middleman. Instead, we built a very prominent "Mensa Scholarships" spotlight card on the new **About** page that explains the $150k program and links exactly to the `mensafoundation.org` application.

### 14. `/sight/`
* **Status**: ✅ **DONE (Merged into /contact/)**
* **Plan**: The legacy page literally just tells people to go to the Contacts page to find the SIGHT coordinator. We do not need a middleman page for this! We actually already built a "Visiting Mensans" Quick Link card on our new homepage (`index.njk`). We will simply route that visual card directly to the upcoming `/contact/` page, where the SIGHT Coordinator's email will reside.

### 15. `/special-interest-groups-sigs/`
* **Status**: ✅ **DONE (Merged into /events/)**
* **Plan**: SIGs are a massive selling point for joining Mensa, so we must keep this concept. However, we assume the old legacy data is hopelessly out of date. We will kill the massive scrolling text wall. Instead, we build a beautiful "SIG Showcase" grid on the new **Events** page (`events.njk`) highlighting the *categories* of groups (Dining, Book Clubs, Tech, Outdoors). We will drop the hardcoded legacy emails/contacts and instead use a generic call-to-action: "Check the Luma Calendar or L.A. Mentary newsletter for this month's active SIG meetings."

### 16. `/testing/`
* **Status**: 🟢 **PORT (as `join.njk`)**
* **Plan**: This is incredibly important content but currently looks like a boring text dump with a literal `[to be updated]` placeholder. We will port this into our new, highly-polished `/join/` page. We'll ditch the manual local test dates and link directly to the national testing portal, alongside big call-to-action cards for "Submit Prior Evidence", "Rejoin Mensa", and "Renew Membership".

---
*End of Legacy Navigation Triage!*
