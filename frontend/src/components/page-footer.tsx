import React from "react";
import { Auth0Resource } from "../models/auth0-resource";
import { PageFooterHyperlink } from "./page-footer-hyperlink";

export const PageFooter = () => {
  const resourceList: Auth0Resource[] = [
    {
      path: "https://helphero.com/why-helphero/",
      label: "Why HelpHero",
    },
    {
      path: "https://helphero.com/get-started",
      label: "How It Works",
    },
  ];

  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__info">
          <div className="page-footer-info__message">
            <p className="page-footer-message__headline">
              <span>This application is brought to you by&nbsp;</span>
              <PageFooterHyperlink path="https://github.com/damicofj">
                <>Francisco D'Amico</>
              </PageFooterHyperlink>
            </p>
            <p className="page-footer-message__description">
              <PageFooterHyperlink path="/register">
                <>
                  <span>
                    Securely support your causes with a small donation &nbsp;
                  </span>
                  <u>in less than 10 minutes</u>
                </>
              </PageFooterHyperlink>
            </p>
          </div>
          {/* <div className="page-footer-info__button">
            <a
              id="create-account-button"
              className="button button--secondary"
              href="https://auth0.com/signup"
              target="_blank"
              rel="noreferrer noopener"
            >
              Create Free Auth0 Account
            </a>
          </div> */}
          <div className="page-footer-info__resource-list">
            {resourceList.map((resource) => (
              <div
                key={resource.path}
                className="page-footer-info__resource-list-item"
              >
                <PageFooterHyperlink path={resource.path}>
                  <>{resource.label}</>
                </PageFooterHyperlink>
              </div>
            ))}
          </div>
        </div>
        <div className="page-footer-grid__brand">
          <div className="page-footer-brand">
            <img
              className="page-footer-brand__logo"
              src="https://cdn.auth0.com/blog/hello-auth0/auth0-shield.svg"
              alt="0workers"
              width="20"
              height="22.22"
            />
            <PageFooterHyperlink path="https://helphero.com/">
              <>HelpHero</>
            </PageFooterHyperlink>
          </div>
        </div>
      </div>
    </footer>
  );
};
