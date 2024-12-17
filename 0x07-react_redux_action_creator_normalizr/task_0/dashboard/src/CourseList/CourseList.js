import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import { StyleSheet, css } from "aphrodite";
import "./CourseList.css";

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList" className={css(styles.CourseList)}>
    
          <thead className={css(styles.tableCell)}>
          
            
                <CourseListRow  textFirstCell="Available courses" isHeader={true} />
            
                <CourseListRow
                  textFirstCell="Course name"
                  textSecondCell="Credit"
                  isHeader={true}
                />
            
          </thead>
          <tbody className={css(styles.tableCell)}>
            {listCourses.length === 0 ? (
              <CourseListRow
                textFirstCell="No course available yet"
                isHeader={false}
              />
            ) : (
              listCourses.map((course) => (
          
                    <CourseListRow
                      key={course.id}
                      textFirstCell={course.name}
                      textSecondCell={course.credit.toString()}
                      isHeader={false}
                    />
          
              ))
            )}
          </tbody>
    
    </table>
  );
};
const styles = StyleSheet.create({
  CourseList: {
    width: '80%',
    borderCollapse: 'collapse',
    margin: 'auto',
  },
tableCell: {
    border: '1px solid black',
    padding: '8px',
},

});
CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
    })
  ),
};

export default CourseList;
