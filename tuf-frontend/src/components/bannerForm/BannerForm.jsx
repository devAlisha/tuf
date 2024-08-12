import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Alert, AlertIcon } from "@chakra-ui/react";
import dayjs from "dayjs";
import { updateBanner } from "../../redux/features/banner/thunk";
import FormField from "../formField/FormField";
import FormActions from "../formActions/FormActions";

const BannerForm = () => {
  const dispatch = useDispatch();
  const { description, error, heading, isVisible, link, countdown, loading } =
    useSelector((state) => state.banner);

  const [formValues, setFormValues] = useState({
    link: "",
    countdown: "",
    heading: "",
    description: "",
    isVisible: true,
  });

  const [isEditable, setIsEditable] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (link !== undefined) {
      setFormValues({
        link,
        countdown: dayjs(countdown).format("YYYY-MM-DDTHH:mm"),
        heading,
        description,
        isVisible,
      });
    }
  }, [link, countdown, heading, description, isVisible]);

  const validateForm = () => {
    const errors = {};
    const now = dayjs();

    if (!formValues.link) errors.link = "Link is required";
    if (!formValues.heading) errors.heading = "Heading is required";
    if (dayjs(formValues.countdown).isBefore(now))
      errors.countdown = "Countdown cannot be before the current time";
    if (!formValues.description) errors.description = "Description is required";

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    if (validateForm()) {
      const updatedData = {
        ...formValues,
        countdown: dayjs(formValues.countdown).valueOf(),
      };
      dispatch(updateBanner(updatedData));
      setIsEditable(false);
    }
  };

  const handleCancel = () => {
    setFormValues({
      link,
      countdown: dayjs(countdown).format("YYYY-MM-DDTHH:mm"),
      heading,
      description,
      isVisible,
    });
    setIsEditable(false);
  };

  return (
    <Box p={5} borderWidth={1} borderRadius="md" boxShadow="md">
      <form>
        <FormField
          id="link"
          name="link"
          type="text"
          label="Link"
          value={formValues.link}
          onChange={handleChange}
          isReadOnly={!isEditable}
          isEditable={isEditable}
          validationError={validationErrors.link}
        />

        <FormField
          id="countdown"
          name="countdown"
          type="datetime-local"
          label="Countdown"
          value={formValues.countdown}
          onChange={handleChange}
          isReadOnly={!isEditable}
          isEditable={isEditable}
          min={dayjs().format("YYYY-MM-DDTHH:mm")}
          validationError={validationErrors.countdown}
        />

        <FormField
          id="heading"
          name="heading"
          type="text"
          label="Heading"
          value={formValues.heading}
          onChange={handleChange}
          isReadOnly={!isEditable}
          isEditable={isEditable}
          validationError={validationErrors.heading}
        />

        <FormField
          id="description"
          name="description"
          type="textarea"
          label="Description"
          value={formValues.description}
          onChange={handleChange}
          isReadOnly={!isEditable}
          isEditable={isEditable}
          validationError={validationErrors.description}
        />

        <FormField
          id="isVisible"
          name="isVisible"
          type="checkbox"
          label="Is Visible"
          value={formValues.isVisible}
          onChange={handleChange}
          isReadOnly={!isEditable}
          isEditable={isEditable}
        />

        <FormActions
          isEditable={isEditable}
          onEdit={() => setIsEditable(true)}
          onSave={handleSave}
          onCancel={handleCancel}
          isLoading={loading}
        />

        {error && (
          <Alert status="error" mt={4}>
            <AlertIcon />
            {error}
          </Alert>
        )}
      </form>
    </Box>
  );
};

export default BannerForm;
