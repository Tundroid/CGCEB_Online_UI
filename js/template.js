const regAccordionItem = `<div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#reg-panel" aria-expanded="false"
                                    aria-controls="reg-panel">
                                    Nothing to see here!
                                </button>
                            </h2>
                            <div id="reg-panel" class="accordion-collapse collapse">
                                <div id="reg-accordion-body" class="accordion-body">
                                </div>
                            </div>
                        </div>`;
const regTable = `<table class="table">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Subject</th>
                            <th>Subject Fee</th>
                            <th>Has Practical</th>
                            <th>Practical Fee</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                    </table>`;
const subjectForm = `<form>
                        <div class="form-group">
                            <label>Select Subject:</label>
                            <select class="form-control">
                            </select>
                            <button type="submit" class="btn btn-primary">Add</button>
                        </div>
                    </form>`;