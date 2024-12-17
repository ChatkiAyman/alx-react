import React, { useState } from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

const CourseListRow = ({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className={css(styles.headerRow)}>
          <th className={css(styles.headerCell)} colSpan={2}>{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr className={css(styles.headerRow)}>
          <th className={css(styles.headerCell)}>{textFirstCell}</th>
          <th className={css(styles.headerCell)}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr className={css(isChecked ? styles.rowChecked : styles.defaultRow)}>
        <td className={css(styles.tableCell)}>
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          {textFirstCell}
        </td>
        <td className={css(styles.tableCell)}>{textSecondCell}</td>
      </tr>
    );
  }
};
const styles = StyleSheet.create({
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },
  rowCheked: {
    backgroundColor: '#e6e4e4'
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  tableCell: {
    border: '1px solid black',
    padding: '8px',
  },
  headerCell: {
    border: '1px solid black',
    padding: '8px',
    fontWeight: 'bold',
  },
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default CourseListRow;
