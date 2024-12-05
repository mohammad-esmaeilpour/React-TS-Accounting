import { TSubUser } from "src/types/subUser.types";

export const SubUserData: TSubUser = {
  title: "User Management",
  addButton: "Add User",
  notFound: "User not found",
  editButton: "Edit User",
  permission: "Access Level",
  pickRole: "Select Role",
  save: 'Save',
  addStepper: {
    title: "Add New User",
    steps: [
      {
        method: "post",
        service: "/subuser/",
        id: 0,
        title: "Personal Information",
        inputs: [
          {
            label: "User Serial Number",
            key: "serial_number",
            type: "number",
            required: true,
            justCreateStep: true,
          },
          {
            label: "Financial Code",
            checkbox: "Create code manually",
            key: "finantial_code",
            type: "number",
            required: true,
          },
          {
            label: "Nickname",
            key: "nick_name",
            required: true,
          },
          {
            label: "First Name",
            key: "first_name",
            required: true,
          },
          {
            label: "Last Name",
            key: "last_name",
            required: true,
          },
          {
            label: "National Code",
            key: "national_code",
            required: true,
          },
          {
            label: "Description",
            key: "description",
            required: true,
          },
        ],
      },
      {
        id: 1,
        method: "put",
        service: "/subuser/step2/",
        title: "Address Information",
        inputs: [
          {
            label: "Country",
            key: "country",
            required: true,
          },
          {
            label: "Province",
            key: "province",
            required: true,
          },
          {
            label: "City",
            key: "city",
            required: true,
          },
          {
            label: "Postal Code",
            key: "postal_code",
            required: true,
          },
          {
            label: "Address",
            key: "address",
            required: true,
          },
        ],
      },
      {
        id: 2,
        method: "put",
        service: "/subuser/step3/",
        title: "Contact Information",
        inputs: [
          {
            label: "Mobile Phone 1",
            key: "phone_number",
            required: true,
          },
          {
            label: "Mobile Phone 2",
            key: "second_phone_number",
            required: true,
          },
          {
            label: "Landline",
            key: "telephone",
            required: true,
          },
          {
            label: "Email",
            key: "email",
            required: true,
          },
        ],
      },
    ],
    nextButton: "Register and Next Step",
    prevButton: "Previous Step",
    finalButton: "Register and Confirm Information",
    successfull: {
      title: "User successfully added",
      link: {
        title: "View User List",
        url: "subuser",
      },
    },
  },
};
