import React, { useState, type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export interface FAQItem {
  question: string;
  answer: ReactNode;
  learnMoreLink?: string;
  learnMoreText?: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  questions: FAQItem[];
}

interface FAQAccordionItemProps extends FAQItem {
  isOpen: boolean;
  onToggle: () => void;
}

function FAQAccordionItem({ question, answer, learnMoreLink, learnMoreText, isOpen, onToggle }: FAQAccordionItemProps) {
  return (
    <div className={clsx(styles.accordionItem, isOpen && styles.accordionItemOpen)}>
      <button
        className={styles.accordionHeader}
        onClick={onToggle}
        aria-expanded={isOpen}
        type="button"
      >
        <span className={styles.accordionQuestion}>{question}</span>
        <span className={styles.accordionIcon} aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        className={styles.accordionContent}
        aria-hidden={!isOpen}
      >
        <div className={styles.accordionAnswer}>
          {answer}
          {learnMoreLink && (
            <div className={styles.accordionLearnMore}>
              <Link to={learnMoreLink} className="button button--outline button--sm">
                {learnMoreText || 'Learn More'}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface FAQAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
}

export function FAQAccordion({ items, allowMultiple = false }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const handleToggle = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!allowMultiple) {
          next.clear();
        }
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <FAQAccordionItem
          key={index}
          {...item}
          isOpen={openItems.has(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

interface FAQCategoryTabsProps {
  categories: FAQCategory[];
}

export function FAQCategoryTabs({ categories }: FAQCategoryTabsProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || '');

  const activeCategoryData = categories.find((cat) => cat.id === activeCategory);

  return (
    <div className={styles.categoryTabs}>
      <div className={styles.tabList} role="tablist">
        {categories.map((category) => (
          <button
            key={category.id}
            role="tab"
            aria-selected={activeCategory === category.id}
            className={clsx(
              styles.tab,
              activeCategory === category.id && styles.tabActive
            )}
            onClick={() => setActiveCategory(category.id)}
            type="button"
          >
            {category.title}
          </button>
        ))}
      </div>
      <div className={styles.tabPanel} role="tabpanel">
        {activeCategoryData && (
          <FAQAccordion items={activeCategoryData.questions} />
        )}
      </div>
    </div>
  );
}

export default FAQAccordion;
