module.exports = function (grunt) {
    grunt.initConfig({
        shell: {
            options: {
                stdout: true,
                stderr: true
            },

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

                options: {
                    template : function (data) {
                        return grunt.template.process(
                            'var <%= name %>Tmpl = <%= contents %> ;',
                            {data: data}
                        );
                    }
                }
            }
        }, /* grunt-fest */

        watch: {
            fest: {
                files: ['templates/*.xml'],
                tasks: 'fest',
                options: {
                    atBegin: true
                }
            },

            server: {
                files: [
                    'public_html/js/**/*.js',
                    'public_html/css/**/*.css'
                    ],
                options: {
                    interrupt: true,
                    livereload: true
                }
            }
        }, /* grunt-watch */

        concurrent: {
            target: ['watch', 'shell'],
            options: {
                logConcurrentOutput: true
            }
        } /* grunt-concurrent */
    });

    grunt.loadNpmTasks('grunt-shell')
    grunt.loadNpmTasks('grunt-fest')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-concurrent')

    grunt.registerTask('default', ['concurrent']);
}