module.exports = function (grunt) {
    grunt.initConfig({
        shell: {
            server: {
                command: 'java -cp L1.2-1.0-jar-with-dependencies.jar main.Main'
            }
        }, /* grunt-shell */

        fest: {
            templates: { /* подзадача */
                files: [{
                    expand: true,
                    cwd: 'templates', /* исходная директория */
                    src: '*.xml', /* имена шаблонов */
                    dest: 'public_html/js/tmpl' /* результирующая директория */
                }],

                template : function (data) {
                    return gtunt.template.process(
                        'var <%= name %>Tmpl = <%= contents %> ;',
                        {data: data}
                    );
                }

            }
        } /* grunt-fest */
    });

    grunt.loadNpmTasks('grunt-shell')
    grunt.loadNpmTasks('grunt-fest')
}