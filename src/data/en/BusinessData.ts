import { TBusiness } from "src/types/Business.type";

export const BusinessData: TBusiness = {
  title: "Your Businesses List",
  addButton: "Add Business",
  editButton: "Edit Business",
  userButton: "User Management",
  permission: "Access Level",
  addStepper: {
    title: "Add New Business",
    steps: [
      {
        id: 0,
        method: "post",
        service: "business/step1/",
        title: "Business",
        inputs: [
          {
            label: "Business Name",
            key: "name",
            required: true,
          },
          {
            label: "Legal Name",
            key: "legal_name",
            required: true,
          },
          {
            label: "Primary Currency",
            key: "currency",
            required: true,
          },
          {
            label: "Calendar",
            key: "calendar_type",
            options: {
              label: "Select Calendar Type",
              list: [
                { title: "Gregorian", key: "gregorian" },
                { title: "Solar", key: "solar" },
              ],
            },
            required: true,
          },
          {
            label: "Warehouse System",
            key: "has_warehouse",
            type: "boolean",
            checkbox: "Include Warehouse System",
            required: true,
          },
        ],
      },
      {
        id: 1,
        method: "put",
        service: "business/step2/",
        title: "Economics",
        inputs: [
          {
            label: "National ID",
            key: "national_license",
            required: false,
          },
          {
            label: "Economic Code",
            key: "economic_license",
            required: false,
          },
          {
            label: "Registration Number",
            key: "registration_number",
            required: false,
          },
        ],
      },
      {
        id: 2,
        method: "put",
        service: "/business/step3/",
        title: "Fiscal Year",
        inputs: [
          {
            label: "Fiscal Year Title",
            key: "financial_year_title",
            required: true,
          },
          {
            label: "Start Date",
            key: "financial_year_start_date",
            required: true,
            type: "date",
          },
          {
            label: "End Date",
            key: "financial_year_end_date",
            required: true,
            type: "date",
          },
        ],
      },
      {
        id: 3,
        method: "put",
        service: "/business/step4/",
        title: "Contact",
        inputs: [
          {
            label: "Country",
            key: "country",
            required: false,
          },
          {
            label: "Province",
            key: "province",
            required: false,
          },
          {
            label: "City",
            key: "city",
            required: false,
          },
          {
            label: "Postal Code",
            key: "postal_code",
            required: false,
          },
          {
            label: "Full Address",
            key: "address",
            required: false,
          },

          {
            label: "Fax 1",
            key: "fax1",
            required: false,
          },
          {
            label: "Email",
            key: "email",
            required: false,
          },
          {
            label: "Fax 2",
            key: "fax2",
            required: false,
          },
          {
            label: "Website",
            key: "website",
            required: false,
          },
        ],
      },
    ],
    nextButton: "Submit and Next Step",
    prevButton: "Previous Step",
    finalButton: "Submit and Final Step",
    successfull: {
      title: "Your Business Was Successfully Added",
      link: {
        title: "View Business List",
        url: "business",
      },
    },
  },
};
