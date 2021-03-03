import PreviewFile from '../previewFile/PreviewFile';
import UploadFile from '../uploadFile/UploadFile';

const Preview = ({
  form,
  setForm,
  file,
  setFile,
  secondFile,
  setSecondFile,
}) => {
  return (
    <div>
      <PreviewFile form={form} setForm={setForm} />;
      <UploadFile
        file={file}
        setFile={setFile}
        secondFile={secondFile}
        setSecondFile={setSecondFile}
      />
    </div>
  );
};

export default Preview;
