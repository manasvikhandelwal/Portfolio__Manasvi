
import bankingWelcome from "./images/banking/welcome.png";
import bankingPhoneNumber from "./images/banking/phone-number.png";
import bankingOtp from "./images/banking/otp.png";
import bankingKyc from "./images/banking/kyc.png";
import bankingSuccess from "./images/banking/success.png";

import foodHome from "./images/Food Delivery/01 – Home.png";
import foodRestaurantListing from "./images/Food Delivery/02 – Restaurant Listing.png";
import foodRestaurantMenu from "./images/Food Delivery/03 – Restaurant Menu.png";
import foodCart from "./images/Food Delivery/04 – Cart.png";
import foodCheckout from "./images/Food Delivery/05 – Checkout.png";
import foodDosaMenu from "./images/Food Delivery/Dosa Junction Menu App Screen.png";

import marketplaceHome from "./images/B2B apps marketplace/01 · Marketplace home.png";
import marketplaceAppDetails from "./images/B2B apps marketplace/02 · App details.png";
import marketplaceVendorDashboard from "./images/B2B apps marketplace/03 · Vendor dashboard.png";
import marketplaceSubmitApplication from "./images/B2B apps marketplace/04 · Submit application.png";
import marketplaceAdminQueue from "./images/B2B apps marketplace/05 · Admin review queue.png";
import marketplaceApplicationReview from "./images/B2B apps marketplace/06 · Application review.png";

/* =====================================================
   GATE INTRO ANIMATION
===================================================== */

function openGate() {
  const gate = document.getElementById("gate");

  if (!gate || gate.classList.contains("open")) return;

  gate.classList.add("open");

  window.setTimeout(() => {
    gate.classList.add("hide");

    document.body.classList.add("portfolio-enter");
    document.body.style.overflowY = "auto";

    document.querySelectorAll(".reveal").forEach((element, index) => {
      window.setTimeout(() => {
        element.classList.add("visible");
      }, index * 100);
    });
  }, 1500);
}

document
  .getElementById("enter-portfolio")
  ?.addEventListener("click", openGate);


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}


/* =====================================================
   CASE STUDY PROJECT DATA
===================================================== */

const caseStudies = {
  banking: {
    number: "01",

    title: "Banking App – Customer Onboarding",

    intro:
      "A five-screen mobile onboarding journey designed to make digital account opening clear, guided and approachable.",

    galleryLabel: "THE ONBOARDING EXPERIENCE",

    galleryTitle: "Five screens. One clear journey.",

    screenshots: [
      {
        src: bankingWelcome,
        name: "Welcome Screen",
        description:
          "Introduces the banking app and starts account setup."
      },
      {
        src: bankingPhoneNumber,
        name: "Phone Number",
        description:
          "Collects a mobile number and explains its use for verification."
      },
      {
        src: bankingOtp,
        name: "OTP Verification",
        description:
          "Shows the code entry and verification step."
      },
      {
        src: bankingKyc,
        name: "KYC Document Upload",
        description:
          "Identifies required documents and provides upload controls."
      },
      {
        src: bankingSuccess,
        name: "Account Created",
        description:
          "Confirms account creation and shows the completed verification status."
      }
    ],

    overview:
      "A mobile app UI/UX and business analysis case study focused on a digital bank account opening journey, from introduction through identity verification to account creation.",

    objective:
      "Make the onboarding steps understandable, keep each screen focused on a clear task, and help users see what is required and what happens next.",

    considerations: [
      "Simple, step-by-step onboarding with one primary task per screen.",
      "Clear instructions and input expectations for the phone number and KYC documents.",
      "Visible OTP entry, resend option and verification action for feedback at the code step.",
      "A clear completion state confirming account creation and verification."
    ],

    flow: [
      "Welcome",
      "Phone number",
      "OTP verification",
      "KYC upload",
      "Account created"
    ],

    tools: ["Figma", "Draw.io", "Jira"],

    prototype:
      "https://www.figma.com/design/ypJtRxIFMayH1V3PKc3sN5/Banking-App-%E2%80%93-Customer-Onboarding?node-id=0-1&t=PP47vxiF5edbBNE3-1"
  },


  "food-delivery": {
    number: "03",

    title:
      "Food Delivery App – UX Audit & Improvement Recommendations",

    intro:
      "A review of the supplied food ordering and checkout screens, organized as a case study around the customer journey and usability review.",

    galleryLabel: "AVAILABLE ORDERING & CHECKOUT SCREENS",

    galleryTitle: "From discovery to checkout.",

    screenshots: [
      {
        src: foodHome,
        name: "Home",
        description:
          "Shows location, search, food categories and nearby restaurants."
      },
      {
        src: foodRestaurantListing,
        name: "Restaurant Listing",
        description:
          "Shows restaurant options, ratings, cuisine types and delivery estimates."
      },
      {
        src: foodRestaurantMenu,
        name: "Restaurant Menu",
        description:
          "Shows a restaurant menu with item names, descriptions, prices and add controls."
      },
      {
        src: foodDosaMenu,
        name: "Dosa Junction Menu",
        description:
          "A separate restaurant menu export with restaurant details, menu categories and item cards."
      },
      {
        src: foodCart,
        name: "Cart",
        description:
          "Shows item quantities, a bill summary and delivery location."
      },
      {
        src: foodCheckout,
        name: "Checkout",
        description:
          "Shows delivery details, order totals, payment choices and the place-order action."
      }
    ],

    overview:
      "The UX audit reviews the food ordering and checkout experience represented by the supplied app screens. Its purpose is to examine the journey from restaurant discovery through checkout, identify usability issues where there is evidence, and frame recommendations without overstating what the exports show.",

    objective:
      "Assess how users move through restaurant discovery, menu selection, cart review and checkout, with attention to clarity, navigation, order details and pricing.",

    flow: [
      "Home",
      "Restaurant listing",
      "Restaurant menu",
      "Cart",
      "Checkout"
    ],

    findingsNote:
      "No written audit log or issue-level findings were included with the supplied project files. The screenshots alone do not establish specific usability defects, so no confirmed issues or priorities are asserted here.",

    screenStatus:
      "The image files are not labeled as existing/reference or improved/proposed screens. They are presented as supplied in the visible ordering sequence; no before-and-after claim is made.",

    reviewPoints: [
      "User flow: the available screens cover home, restaurant listing, restaurant menu, cart and checkout.",

      "Navigation and hierarchy: the exports show search and food categories, restaurant filters, menu sections and checkout steps.",

      "Restaurant and food information: visible details include restaurant names, cuisines, ratings, delivery estimates, item descriptions and prices.",

      "Add-to-cart interaction: menu exports show add controls beside food items.",

      "Cart and checkout: the cart shows quantity controls and a bill summary; checkout shows delivery details and payment options.",

      "Pricing and error prevention: totals and charges are visible in the supplied cart and checkout screens. No validation, error or recovery states were supplied to assess.",

      "Requirements and acceptance criteria: no business requirements or acceptance criteria were included in the supplied project files."
    ],

    designSummary:
      "The supplied screens visibly carry restaurant and item details into the ordering journey, provide add controls on menu items, and show a bill summary and payment choices before placing an order. These are screen-supported observations, not verified before-and-after outcomes.",

    tools: ["Figma", "Excel", "Confluence"],

    prototype:
      "https://www.figma.com/design/Ahq6vTms0NMQV1f201RJOP/Food-Delivery-App?node-id=0-1&t=EAyjNyGqFdCx3cpS-1"
  },

  "b2b-marketplace": {
    number: "04",

    title: "B2B Apps Marketplace – Vendor & Buyer Platform",

    intro:
      "A B2B platform where vendors can submit business applications and buyers can explore and discover useful apps. Admins can review applications and approve, reject, or request changes.",

    galleryLabel: "VENDOR & BUYER PLATFORM",

    galleryTitle: "Six screens. One connected marketplace.",

    landscapeScreens: true,

    screenshots: [
      {
        src: marketplaceHome,
        name: "Marketplace Home",
        description:
          "Marketplace home screen for buyers to explore business apps."
      },
      {
        src: marketplaceAppDetails,
        name: "App Details",
        description:
          "Application details screen for discovering a business app."
      },
      {
        src: marketplaceVendorDashboard,
        name: "Vendor Dashboard",
        description:
          "Vendor dashboard for managing applications and activity."
      },
      {
        src: marketplaceSubmitApplication,
        name: "Submit Application",
        description:
          "Vendor application submission screen."
      },
      {
        src: marketplaceAdminQueue,
        name: "Admin Review Queue",
        description:
          "Admin queue for reviewing submitted applications."
      },
      {
        src: marketplaceApplicationReview,
        name: "Application Review",
        description:
          "Admin review screen with approve, reject and request-changes actions."
      }
    ],

    overview:
      "A B2B platform where vendors can submit business applications and buyers can explore and discover useful apps. Admins can review applications and approve, reject, or request changes.",

    objective:
      "Connect buyer app discovery with vendor submissions and an admin review process for each application.",

    tools: ["Figma", "Draw.io", "Jira"],

    prototype:
      "https://www.figma.com/design/863HxxOvmWfmoKsDUD9BLv/B2B-Apps-Marketplace?node-id=0-1&t=EAyjNyGqFdCx3cpS-1"
  }
};


/* =====================================================
   CASE STUDY MODAL ELEMENTS
===================================================== */

const caseStudyOverlay = document.getElementById("case-study-overlay");

const caseStudyModal =
  caseStudyOverlay?.querySelector(".case-study-modal");

const caseStudyClose =
  caseStudyOverlay?.querySelector(".case-study-close");

const caseStudyContent =
  document.getElementById("case-study-content");

const caseStudyCards =
  document.querySelectorAll("[data-case-study]");

let previousFocusedElement = null;
let previousBodyOverflow = "";
let previousBodyOverflowY = "";
let previousBodyPaddingRight = "";
let closeCaseStudyTimer = null;


/* =====================================================
   HELPER: ESCAPE HTML
===================================================== */

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}


/* =====================================================
   HELPER: RENDER USER FLOW
===================================================== */

function renderFlow(steps, label) {
  return `
    <div class="case-study-flow" aria-label="${escapeHtml(label)}">

      ${steps
        .map(
          (step, index) => `
            ${index
              ? '<i aria-hidden="true">→</i>'
              : ""
            }

            <span>${escapeHtml(step)}</span>
          `
        )
        .join("")}

    </div>
  `;
}


/* =====================================================
   HELPER: RENDER PROJECT SCREENSHOTS
===================================================== */

function renderScreenshots(project) {
  return `
    <div
      class="case-study-gallery${project.landscapeScreens ? " case-study-gallery-landscape" : ""}"
      aria-label="${escapeHtml(project.galleryTitle)}"
    >

      ${project.screenshots
        .map(
          (screen, index) => `
            <figure class="case-study-screen">

              <div class="case-study-image">

                <img
                  src="${escapeHtml(screen.src)}"
                  alt="${escapeHtml(
                    screen.name + ": " + screen.description
                  )}"
                  loading="lazy"
                  decoding="async"
                />

              </div>

              <figcaption>

                <span>
                  ${String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                  ${escapeHtml(screen.name)}
                </strong>

                <small>
                  ${escapeHtml(screen.description)}
                </small>

              </figcaption>

            </figure>
          `
        )
        .join("")}

    </div>
  `;
}


/* =====================================================
   HELPER: RENDER PROJECT TOOLS
===================================================== */

function renderTools(tools) {
  return `
    <div class="case-study-tools">

      <span class="case-study-section-label">
        TOOLS USED
      </span>

      ${tools
        .map(
          (tool) => `
            <span class="case-study-tool">
              ${escapeHtml(tool)}
            </span>
          `
        )
        .join("")}

    </div>
  `;
}


/* =====================================================
   HELPER: RENDER FIGMA BUTTON
===================================================== */

function renderPrototypeLink(project) {
  if (!project.prototype) return "";

  return `
    <div class="case-study-prototype-wrapper">

      <a
        class="case-study-figma"
        href="${escapeHtml(project.prototype)}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open ${escapeHtml(project.title)} Figma prototype in a new tab"
      >

        View Figma Page

        <span aria-hidden="true">↗</span>

      </a>

    </div>
  `;
}


/* =====================================================
   BANKING CASE STUDY
===================================================== */

function renderBankingStudy(project) {
  return `
    <div class="case-study-gallery-heading">

      <p class="case-study-eyebrow">
        ${escapeHtml(project.galleryLabel)}
      </p>

      <h3 class="serif">
        ${escapeHtml(project.galleryTitle)}
      </h3>

    </div>

    ${renderScreenshots(project)}


    <div class="case-study-story-heading">

      <p class="case-study-section-label">
        THE CASE STUDY
      </p>

      <h3 class="serif">
        Project Overview &amp; Objective
      </h3>

    </div>


    <div class="case-study-story-grid">

      <section>

        <p class="case-study-section-label">
          01 / PROJECT OVERVIEW
        </p>

        <h3 class="serif">
          Project Overview
        </h3>

        <p>
          ${escapeHtml(project.overview)}
        </p>

      </section>


      <section>

        <p class="case-study-section-label">
          02 / OBJECTIVE
        </p>

        <h3 class="serif">
          Objective
        </h3>

        <p>
          ${escapeHtml(project.objective)}
        </p>

      </section>


      <section class="case-study-solution">

        <p class="case-study-section-label">
          03 / UX CONSIDERATIONS
        </p>

        <h3 class="serif">
          A guided, confidence-building flow
        </h3>

        <ul class="case-study-list">

          ${project.considerations
            .map(
              (item) => `
                <li>${escapeHtml(item)}</li>
              `
            )
            .join("")}

        </ul>

        ${renderFlow(
          project.flow,
          "Bank account onboarding flow"
        )}

      </section>

    </div>


    <section class="case-study-process">

      <p class="case-study-section-label">
        DESIGNED WITH
      </p>

      <h3 class="serif">
        Tools used
      </h3>

      ${renderTools(project.tools)}

    </section>


    ${renderPrototypeLink(project)}
  `;
}


/* =====================================================
   FOOD DELIVERY CASE STUDY
===================================================== */

function renderFoodDeliveryStudy(project) {
  return `
    <div class="case-study-story-heading">

      <p class="case-study-section-label">
        01 / PROJECT OVERVIEW
      </p>

      <h3 class="serif">
        Review the journey from discovery to checkout
      </h3>

    </div>


    <div class="case-study-story-grid">

      <section>

        <p class="case-study-section-label">
          PURPOSE
        </p>

        <h3 class="serif">
          Project Overview
        </h3>

        <p>
          ${escapeHtml(project.overview)}
        </p>

      </section>


      <section>

        <p class="case-study-section-label">
          AUDIT OBJECTIVE
        </p>

        <h3 class="serif">
          Objective
        </h3>

        <p>
          ${escapeHtml(project.objective)}
        </p>

      </section>

    </div>


    <div class="case-study-gallery-heading case-study-subsection-heading">

      <p class="case-study-eyebrow">
        02 / EXISTING USER EXPERIENCE
      </p>

      <h3 class="serif">
        Available ordering &amp; checkout screens
      </h3>

      <p class="case-study-note">
        ${escapeHtml(project.screenStatus)}
      </p>

    </div>


    ${renderScreenshots(project)}



    <section class="case-study-review">

      <div class="case-study-story-heading">

        <p class="case-study-section-label">
          05 / UX &amp; BUSINESS ANALYSIS
        </p>

        <h3 class="serif">
          Journey, interaction and requirements
        </h3>

      </div>

      ${renderFlow(
        project.flow,
        "Food delivery ordering flow"
      )}

      <ul class="case-study-list">

        ${project.reviewPoints
          .map(
            (item) => `
              <li>${escapeHtml(item)}</li>
            `
          )
          .join("")}

      </ul>

    </section>


    <section class="case-study-process">

      <p class="case-study-section-label">
        TOOLS USED
      </p>

      <h3 class="serif">
        Design &amp; analysis toolkit
      </h3>

      ${renderTools(project.tools)}

    </section>


    ${renderPrototypeLink(project)}
  `;
}


/* =====================================================
   B2B MARKETPLACE CASE STUDY
===================================================== */

function renderB2BMarketplaceStudy(project) {
  return `
    <div class="case-study-gallery-heading">

      <p class="case-study-eyebrow">
        ${escapeHtml(project.galleryLabel)}
      </p>

      <h3 class="serif">
        ${escapeHtml(project.galleryTitle)}
      </h3>

    </div>

    ${renderScreenshots(project)}


    <div class="case-study-story-heading">

      <p class="case-study-section-label">
        THE CASE STUDY
      </p>

      <h3 class="serif">
        Project Overview &amp; Objective
      </h3>

    </div>


    <div class="case-study-story-grid">

      <section>

        <p class="case-study-section-label">
          01 / PROJECT OVERVIEW
        </p>

        <h3 class="serif">
          Project Overview
        </h3>

        <p>
          ${escapeHtml(project.overview)}
        </p>

      </section>


      <section>

        <p class="case-study-section-label">
          02 / PLATFORM OBJECTIVE
        </p>

        <h3 class="serif">
          Objective
        </h3>

        <p>
          ${escapeHtml(project.objective)}
        </p>

      </section>


      <section class="case-study-solution">

        <p class="case-study-section-label">
          03 / USER JOURNEYS
        </p>

        <h3 class="serif">
          Buyer discovery, vendor submission, admin review
        </h3>

        <ul class="case-study-list">

          <li>
            Buyer: explore the marketplace and view app details.
          </li>

          <li>
            Vendor: manage applications from the dashboard and submit an app.
          </li>

          <li>
            Admin: review the queue and approve, reject, or request changes.
          </li>

        </ul>

      </section>

    </div>


    <section class="case-study-process">

      <p class="case-study-section-label">
        DESIGNED WITH
      </p>

      <h3 class="serif">
        Tools used
      </h3>

      ${renderTools(project.tools)}

    </section>


    ${renderPrototypeLink(project)}
  `;
}


/* =====================================================
   OPEN CASE STUDY
===================================================== */

function openCaseStudy(projectId, trigger) {
  const project = caseStudies[projectId];

  if (
    !project ||
    !caseStudyOverlay ||
    !caseStudyModal ||
    !caseStudyContent ||
    caseStudyOverlay.classList.contains("is-open")
  ) {
    return;
  }

  window.clearTimeout(closeCaseStudyTimer);

  previousFocusedElement = trigger || document.activeElement;

  previousBodyOverflow = document.body.style.overflow;
  previousBodyOverflowY = document.body.style.overflowY;
  previousBodyPaddingRight = document.body.style.paddingRight;

  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  if (scrollbarWidth > 0) {
    const currentPadding =
      Number.parseFloat(
        window.getComputedStyle(document.body).paddingRight
      ) || 0;

    document.body.style.paddingRight =
      `${currentPadding + scrollbarWidth}px`;
  }

  document.body.style.overflow = "hidden";
  document.body.style.overflowY = "hidden";

  let projectContent;

  if (projectId === "banking") {
    projectContent = renderBankingStudy(project);
  } else if (projectId === "food-delivery") {
    projectContent = renderFoodDeliveryStudy(project);
  } else {
    projectContent = renderB2BMarketplaceStudy(project);
  }

  caseStudyContent.innerHTML = `
    <header class="case-study-header">

      <p class="case-study-eyebrow">

        <span class="case-study-number">
          ${escapeHtml(project.number)}
        </span>

        <span class="case-study-divider">/</span>

        SELECTED CASE STUDY

      </p>

      <h2 class="serif" id="case-study-title">
        ${escapeHtml(project.title)}
      </h2>

      <p id="case-study-intro">
        ${escapeHtml(project.intro)}
      </p>

    </header>

    ${projectContent}
  `;

  caseStudyModal.setAttribute(
    "aria-labelledby",
    "case-study-title"
  );

  caseStudyModal.setAttribute(
    "aria-describedby",
    "case-study-intro"
  );

  caseStudyModal.scrollTop = 0;

  caseStudyOverlay.setAttribute("aria-hidden", "false");

  caseStudyOverlay.classList.remove("is-closing");
  caseStudyOverlay.classList.add("is-open");

  caseStudyClose?.focus();
}


/* =====================================================
   CLOSE CASE STUDY
===================================================== */

function closeCaseStudy() {
  if (
    !caseStudyOverlay ||
    !caseStudyOverlay.classList.contains("is-open")
  ) {
    return;
  }

  caseStudyOverlay.classList.remove("is-open");
  caseStudyOverlay.classList.add("is-closing");

  caseStudyOverlay.setAttribute("aria-hidden", "true");

  document.body.style.overflow = previousBodyOverflow;
  document.body.style.overflowY = previousBodyOverflowY;
  document.body.style.paddingRight = previousBodyPaddingRight;

  window.clearTimeout(closeCaseStudyTimer);

  closeCaseStudyTimer = window.setTimeout(() => {
    caseStudyOverlay.classList.remove("is-closing");
  }, 450);

  if (
    previousFocusedElement instanceof HTMLElement &&
    document.contains(previousFocusedElement)
  ) {
    previousFocusedElement.focus();
  }
}


/* =====================================================
   CASE STUDY CARD EVENTS
===================================================== */

if (caseStudyOverlay) {
  caseStudyCards.forEach((card) => {
    const projectId = card.dataset.caseStudy;

    if (!caseStudies[projectId]) return;

    card.addEventListener("click", () => {
      openCaseStudy(projectId, card);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openCaseStudy(projectId, card);
      }
    });
  });


  /* Close button */

  caseStudyClose?.addEventListener(
    "click",
    closeCaseStudy
  );


  /* Close when clicking outside modal */

  caseStudyOverlay.addEventListener("click", (event) => {
    if (event.target === caseStudyOverlay) {
      closeCaseStudy();
    }
  });


  /* Escape key and focus trap */

  document.addEventListener("keydown", (event) => {
    if (!caseStudyOverlay.classList.contains("is-open")) {
      return;
    }

    if (event.key === "Escape") {
      closeCaseStudy();
      return;
    }

    if (event.key === "Tab" && caseStudyModal) {
      const focusableElements =
        caseStudyModal.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

      const visibleFocusableElements =
        Array.from(focusableElements).filter(
          (element) => element.getClientRects().length > 0
        );

      if (visibleFocusableElements.length === 0) {
        event.preventDefault();
        caseStudyModal.focus();
        return;
      }

      const firstElement = visibleFocusableElements[0];

      const lastElement =
        visibleFocusableElements[
          visibleFocusableElements.length - 1
        ];

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  });
}


/* =====================================================
   LOCK PAGE SCROLL UNTIL GATE OPENS
===================================================== */

document.body.style.overflow = "hidden";


/* =====================================================
   NAVIGATION LIGHT SWEEP + SMOOTH SCROLL
===================================================== */

let lightSweepTimeout;

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    if (!href || !href.startsWith("#")) return;

    const target = document.querySelector(href);

    if (!target) return;

    event.preventDefault();

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const light = document.getElementById("light-sweep");

    window.clearTimeout(lightSweepTimeout);

    light?.classList.remove("active");

    if (!reducedMotion && light) {
      void light.offsetWidth;

      light.classList.add("active");

      lightSweepTimeout = window.setTimeout(() => {
        light.classList.remove("active");
      }, 1300);
    }

    target.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start"
    });

    if (!reducedMotion) {
      target.classList.remove("light-reveal");

      void target.offsetWidth;

      target.classList.add("light-reveal");
    }
  });
});


/* =====================================================
   COPY EMAIL BUTTON
===================================================== */

const copyEmailButton =
  document.getElementById("copy-email");

if (copyEmailButton) {
  copyEmailButton.addEventListener("click", async () => {
    const originalText = "COPY";

    try {
      await navigator.clipboard.writeText(
        "khandelwal.manasvi20@gmail.com"
      );

      copyEmailButton.textContent = "COPIED ✓";

      window.setTimeout(() => {
        copyEmailButton.textContent = originalText;
      }, 2000);

    } catch (error) {
      console.error("Unable to copy email:", error);

      copyEmailButton.textContent = "FAILED";

      window.setTimeout(() => {
        copyEmailButton.textContent = originalText;
      }, 2000);
    }
  });
}
