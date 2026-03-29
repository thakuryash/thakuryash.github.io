import React, { useMemo, useState } from "react";
import styled from "styled-components";
import Title from "../components/title";
import { MainLayout, InnerLayout } from "../styles/layouts";
import portfolios from "../data/portfolios";
import Menu from "../components/menu";
import Button from "../components/button";

const getCategory = item => item.category || item.catagory;
const allButton = ["All", ...new Set(portfolios.map(item => getCategory(item)).filter(Boolean))];

function Portfoliopage() {
  const [menuItem, setMenuItems] = useState(portfolios);
  const [button] = useState(allButton);
  const [activeFilter, setActiveFilter] = useState("All");

  const featuredProject = useMemo(() => portfolios.find(item => item.isFeatured), []);

  const filter = selectedCategory => {
    setActiveFilter(selectedCategory);
    if (selectedCategory === "All") {
      setMenuItems(portfolios);
      return;
    }
    const filteredData = portfolios.filter(item => getCategory(item) === selectedCategory);
    setMenuItems(filteredData);
  };

  return (
    <MainLayout>
      <Title title={"Portfolios"} span={"Portfolios"} />
      <InnerLayout>
        {featuredProject && (
          <FeaturedProjectStyled>
            <p className="eyebrow">Featured Launch</p>
            <h3>{featuredProject.title}</h3>
            <p className="description">{featuredProject.text}</p>
            {featuredProject.highlights?.length > 0 && (
              <ul className="highlights">
                {featuredProject.highlights.map(highlight => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
            <div className="actions">
              <a href={featuredProject.link2} target="_blank" rel="noopener noreferrer">
                Visit carworthai.ca
              </a>
              {featuredProject.link1 && (
                <a href={featuredProject.link1} target="_blank" rel="noopener noreferrer" className="secondary">
                  View Source
                </a>
              )}
            </div>
          </FeaturedProjectStyled>
        )}
        <Button filter={filter} button={button} activeButton={activeFilter} />
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
}

const FeaturedProjectStyled = styled.section`
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.16) 0%, rgba(118, 75, 162, 0.16) 100%);
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;
  text-align: left;

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.08rem;
    font-size: 0.85rem;
    color: var(--primary-color-light);
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 0.8rem;
    color: var(--white-color);
  }

  .description {
    color: var(--font-light-color);
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  .highlights {
    display: grid;
    grid-template-columns: repeat(2, minmax(220px, 1fr));
    gap: 0.7rem;
    margin-bottom: 1.4rem;

    li {
      color: var(--white-color);
      background: rgba(0, 0, 0, 0.18);
      border-radius: 10px;
      padding: 0.65rem 0.8rem;
      font-size: 0.95rem;
    }
  }

  .actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      padding: 0.75rem 1.2rem;
      font-weight: 700;
      transition: var(--transition-smooth);
      border: 1px solid transparent;
      background: var(--primary-gradient);
      color: #fff;
    }

    .secondary {
      background: transparent;
      border-color: var(--primary-color);
      color: var(--white-color);
    }
  }

  @media screen and (max-width: 750px) {
    padding: 1.4rem;

    h3 {
      font-size: 1.5rem;
    }

    .highlights {
      grid-template-columns: 1fr;
    }
  }
`;

export default Portfoliopage;
