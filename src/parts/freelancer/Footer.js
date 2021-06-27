import React from "react";
import ScriptTag from "react-script-tag";

const ScriptJs = (props) => (
  <>
    <ScriptTag
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
    />

    <ScriptTag
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
    />
    <ScriptTag
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
    />

    <ScriptTag
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"
    />
    <ScriptTag
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/startbootstrap-sb-admin-2/4.1.4/js/sb-admin-2.min.js"
    />
    {/* 
    <ScriptTag
      type="text/javascript"
      src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"
    />
    <ScriptTag
      type="text/javascript"
      src="https://cdn.datatables.net/1.10.25/js/dataTables.bootstrap4.min.js"
    /> */}
  </>
);

export default function footer() {
  return (
    <>
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; Kerjain 2021</span>
          </div>
        </div>
      </footer>
      <ScriptJs />
    </>
  );
}
