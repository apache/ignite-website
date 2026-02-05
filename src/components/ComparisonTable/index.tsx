import React from 'react';
import styles from './styles.module.css';

/**
 * Comparison Table Component
 *
 * Displays a comparison table for features across different products.
 * Used on use case pages to compare Apache Ignite with alternatives.
 */

interface Product {
  name: string;
  features: (boolean | string)[];
}

interface ComparisonTableProps {
  features: string[];
  products: Product[];
}

export default function ComparisonTable({
  features,
  products,
}: ComparisonTableProps): JSX.Element {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.featureHeader}>Feature</th>
            {products.map((product, index) => (
              <th key={index} className={styles.productHeader}>
                {product.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, featureIndex) => (
            <tr key={featureIndex}>
              <td className={styles.featureCell}>{feature}</td>
              {products.map((product, productIndex) => {
                const value = product.features[featureIndex];
                return (
                  <td key={productIndex} className={styles.valueCell}>
                    {typeof value === 'boolean' ? (
                      value ? (
                        <span className={styles.checkmark}>✓</span>
                      ) : (
                        <span className={styles.cross}>✗</span>
                      )
                    ) : (
                      value
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
