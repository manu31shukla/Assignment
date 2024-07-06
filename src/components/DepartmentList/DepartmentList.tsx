import React, { useState, useEffect } from 'react';
import { List, ListItemText, Collapse, Checkbox, ListItemButton } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { StyledList, SubListItem } from './DepartmentList.styles'; 

interface Department {
  department: string;
  sub_departments: string[];
}

const departments: Department[] = [
  {
    department: 'Customer_Service',
    sub_departments: ['Support', 'Customer_Success'],
  },
  {
    department: 'Design',
    sub_departments: ['Graphic_Design', 'Product_Design', 'Web_Design'],
  },
];

const DepartmentList: React.FC = () => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const allSelectedDepartments: { [key: string]: boolean } = {};
    departments.forEach((dept) => {
      const allSelected = dept.sub_departments.every((sub) => selected[sub]);
      allSelectedDepartments[dept.department] = allSelected;
    });
    setSelected((prev) => ({
      ...prev,
      ...allSelectedDepartments,
    }));
  }, [open, selected]);

  const handleToggle = (name: string) => {
    setOpen((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleSelect = (name: string, subDept?: string) => {
    if (subDept) {
      setSelected((prev) => ({
        ...prev,
        [subDept]: !prev[subDept],
        [name]: prev[name] || !prev[subDept],
      }));
    } else {
      const allSelected = departments.find((d) => d.department === name)?.sub_departments.every(
        (sub) => selected[sub]
      );
      setSelected((prev) => ({
        ...prev,
        ...departments
          .find((d) => d.department === name)
          ?.sub_departments.reduce((acc, sub) => ({ ...acc, [sub]: !allSelected }), {}),
        [name]: !allSelected,
      }));
    }
  };

  const handleSubDeptDeselect = (parentName: string, subDept: string) => {
    const anySelected = departments.find((d) => d.department === parentName)?.sub_departments.some(
      (sub) => selected[sub] && sub !== subDept
    );
    if (!anySelected) {
      setSelected((prev) => ({
        ...prev,
        [parentName]: false,
      }));
    }
  };

  return (
    <StyledList>
      {departments.map((dept) => (
        <div key={dept.department}>
          {/* Replace StyledListItem with ListItemButton */}
          <ListItemButton
            onClick={() => handleToggle(dept.department)}
            selected={selected[dept.department]}
          >
            <Checkbox
              edge="start"
              checked={selected[dept.department] || false}
              tabIndex={-1}
              disableRipple
              onClick={() => handleSelect(dept.department)}
            />
            <ListItemText primary={dept.department.replace('_', ' ')} />
            {open[dept.department] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open[dept.department]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dept.sub_departments.map((subDept) => (
                <SubListItem
                  key={subDept}
                  onClick={() => {
                    handleSelect(dept.department, subDept);
                    handleSubDeptDeselect(dept.department, subDept);
                  }}
                  selected={selected[subDept]}
                >
                  <Checkbox
                    edge="start"
                    checked={selected[subDept] || false}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText primary={subDept.replace('_', ' ')} />
                </SubListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </StyledList>
  );
};

export default DepartmentList;
